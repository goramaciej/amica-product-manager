<template>
    <div class="products-overview">
        <div class="filters">
            <div class="filters-element">
                <i class="icofont-search-2"></i>
                <h2> {{ $route.params.category }} </h2>
                <h4>Wyświetl:</h4>
                <select v-model="categoryName" @change="catSelected" class="form-control">
                    <option selected>Wszystkie</option>
                    <option
                        v-for="(item, index) in categories"
                        :key="index"
                    >{{ item.name }}</option>
                </select>
            </div>
        </div>
        <!-- <div class="search">DDD</div> -->
        <div class="products">
            <product-item
                v-for="(product, index) in products"
                :key="'key' + index + keyNum"
                :product="product"
                :classBig="itemsBig"
                :index="index"
                :ref="'item' + index"
                @itemVisible="addVisibleItemId"
                @registerItem="registerItem"
            ></product-item>
        </div>
    </div>
</template>

<script>
import productItem from "../components/product/productItem.vue";
export default {
    name: "Products",
    data() {
        return {
            itemsBig: true,
            productsToShow: [],
            registeredItems: [],
            showArr: [],
            categoryName: "Wszystkie",
            selectedCategory: 0,
            keyNum: 0,

            selector: null
        };
    },
    components: {
        productItem
    },
    computed: {
        products: {
            /*const prods = JSON.parse(
                JSON.stringify(this.$store.getters.products)
            );
            return prods;*/
            get: function() {
                let getProducts = JSON.parse(
                    JSON.stringify(this.$store.getters.products)
                );
                if (this.selectedCategory == 0) {
                    return getProducts;
                } else {
                    return getProducts.filter(el => {
                        return el.cat == this.selectedCategory;
                    });
                }
            }
        },
        categories() {
            const cats = JSON.parse(
                JSON.stringify(this.$store.getters.categories)
            );
            return cats;
        }
    },
    methods: {
        registerItem(item) {
            this.registeredItems.push(item);
        },
        addVisibleItemId(obj) {
            if (this.showArr.length == 0) {
                setTimeout(this.showArrayFilled, 200);
            }
            this.showArr.push(obj);
        },
        showArrayFilled() {
            this.showArr.sort((a, b) => (a.index > b.index) ? 1 : -1);
            for (let i = 0; i < this.showArr.length; i++) {                
                let element = this.registeredItems.find( (el) => el.product.product_id === this.showArr[i].id);
                element.showMe(i/15);
            }
            this.showArr = [];
        },
        catSelected(ev) {
            switch(ev.target.value){
                case 'Wszystkie':
                    this.$router.push({name: 'products', params: {category:'wszystkie'}});
                    break;
                case 'Lodówki':
                    this.$router.push({name: 'products', params: {category:'lodowki'}});
                    break;
                case 'Kuchnie wolnostojące':
                    this.$router.push({name: 'products', params: {category:'kuchnie'}});
                    break;
                case 'Piekarniki':
                    this.$router.push({name: 'products', params: {category:'piekarniki'}});
                    break;
                case 'Zmywarki':
                    this.$router.push({name: 'products', params: {category:'zmywarki'}});
                    break;
                case 'Odkurzacze':
                    this.$router.push({name: 'products', params: {category:'odkurzacze'}});
                    break;
            }
        },
        changeCategory(){
            this.keyNum++;
            this.registeredItems = [];
            switch (this.$route.params.category){
                case 'wszystkie':
                    this.selectedCategory = 0;
                    this.categoryName = "Wszystkie";
                    break;
                case 'lodowki':
                    this.selectedCategory = 1;
                    this.categoryName = "Lodówki";
                    break;
                case 'kuchnie':
                    this.selectedCategory = 2;
                    this.categoryName = "Kuchnie wolnostojące";
                    break;
                case 'piekarniki':
                    this.selectedCategory = 3;
                    this.categoryName = "Piekarniki";
                    break;
                case 'zmywarki':
                    this.selectedCategory = 4;
                    this.categoryName = "Zmywarki";
                    break;
                case 'odkurzacze':
                    this.selectedCategory = 5;
                    this.categoryName = "Odkurzacze";
                    break;
                default :
                    this.$router.push({name: 'products', params: {category:'wszystkie'}});
            }
        }
    },
    watch: { 
        '$route.params.category': {
            handler: function(category) {
                this.changeCategory();
            },
            deep: true,
            immediate: true
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../scss/amicaform.scss";
@import "../scss/icofont.css";
$filtersWidth: 250px;
.products-overview {
    position: relative;
    display: grid;
    grid-template-columns: $filtersWidth 1fr;

    // grid-template-areas:
    //     "filters search"
    //     "filters products";
}
.search {
    border-bottom: 1px solid grey;
}
.filters {
    // grid-area: filters;
    position: relative;
    top: -80px;
    text-align: left;
    color: white;
    .filters-element {
        position: fixed;
        width: $filtersWidth;
        background-color: $amicared;
        padding: 80px 20px 10px;
    }
}
.products {
    padding-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
select select option[selected] {
    background-color: pink;
}
select option:hover {
    //box-shadow: 0 0 10px 100px #1882A8 inset;
    font-size: 25px;
}
</style>
