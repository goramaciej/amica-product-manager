<template>
    <div class="products-overview">
        <div class="filters-wrapper">
            <div class="filters">
                <div class="filter-show filter">
                    <h4>Wyświetl:</h4>
                    <select v-model="categoryName" @change="catSelected" class="form-control">
                        <option selected>Wszystkie</option>
                        <option v-for="(item, index) in categories" :key="index">{{ item.name }}</option>
                    </select>
                </div>

                <div class="filter-search filter">
                    <h4>Wyszukaj:</h4>

                    <div class="form-group" @mouseleave="searchMouseLeave">
                        <input
                            type="text"
                            id="searchInput"
                            class="form-control"
                            placeholder="Wyszukaj"
                            autocomplete="off"
                            @input="searchTextChanged"
                            ref="searchInput"
                        />
                        <i class="icofont-close-circled icon" v-if="clearSearchButton" @click="clearSearch"></i>
                        <div class="searchResults" >
                            <div class="searchResult" v-for="(item, index) in searchArr" :key="index" @click="openSearchResult(item)">{{ item.product.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="search">DDD</div> -->
        <div class="products">
            <h4 v-if="prods">Brak produktów do wyświetlenia</h4>
            <product-item
                v-for="(product, index) in products"
                :key="'key' + index + keyNum"
                :product="product"
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
            registeredItems: [],
            showArr: [],
            categoryName: "Wszystkie",
            selectedCategory: 0,
            keyNum: 0,
            selector: null,

            searchText: "Wyszukaj",
            searchArr: [],
            clearSearchButton: false
        };
    },
    components: {
        productItem
    },
    computed: {
        products: {
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
        },
        prods(){
            return this.products.length < 1;
        },
        searchValueLength(){
            if (this.$refs.searchInput){
                return this.$refs.searchInput.value.length > 0;
            }else{
                return false;
            }
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
            this.showArr.sort((a, b) => (a.index > b.index ? 1 : -1));
            for (let i = 0; i < this.showArr.length; i++) {
                let element = this.registeredItems.find(
                    el => el.product.product_id === this.showArr[i].id
                );
                element.showMe(i / 15);
            }
            this.showArr = [];
        },
        catSelected(ev) {
            switch (ev.target.value) {
                case "Wszystkie":
                    this.$router.push({
                        name: "products",
                        params: { category: "wszystkie" }
                    });
                    break;
                case "Lodówki":
                    this.$router.push({
                        name: "products",
                        params: { category: "lodowki" }
                    });
                    break;
                case "Kuchnie wolnostojące":
                    this.$router.push({
                        name: "products",
                        params: { category: "kuchnie" }
                    });
                    break;
                case "Piekarniki":
                    this.$router.push({
                        name: "products",
                        params: { category: "piekarniki" }
                    });
                    break;
                case "Zmywarki":
                    this.$router.push({
                        name: "products",
                        params: { category: "zmywarki" }
                    });
                    break;
                case "Odkurzacze":
                    this.$router.push({
                        name: "products",
                        params: { category: "odkurzacze" }
                    });
                    break;
            }
        },
        changeCategory() {
            this.keyNum++;
            this.registeredItems = [];
            switch (this.$route.params.category) {
                case "wszystkie":
                    this.selectedCategory = 0;
                    this.categoryName = "Wszystkie";
                    break;
                case "lodowki":
                    this.selectedCategory = 1;
                    this.categoryName = "Lodówki";
                    break;
                case "kuchnie":
                    this.selectedCategory = 2;
                    this.categoryName = "Kuchnie wolnostojące";
                    break;
                case "piekarniki":
                    this.selectedCategory = 3;
                    this.categoryName = "Piekarniki";
                    break;
                case "zmywarki":
                    this.selectedCategory = 4;
                    this.categoryName = "Zmywarki";
                    break;
                case "odkurzacze":
                    this.selectedCategory = 5;
                    this.categoryName = "Odkurzacze";
                    break;
                default:
                    this.$router.push({
                        name: "products",
                        params: { category: "wszystkie" }
                    });
            }
        },

        searchTextChanged(ev){
            if (ev.target.value.length > 2){
                this.searchArr = this.registeredItems.filter( item => {
                    return item.product.description.toLowerCase().includes(ev.target.value.toLowerCase());
                });
            }else{
                this.searchArr = [];
            }

            this.clearSearchButton = ev.target.value.length > 0;
            
        },
        clearSearch(){
            this.searchArr = [];
            this.clearSearchButton = false;
            this.$refs.searchInput.value = "";
        },
        searchMouseLeave(){
            //console.log("searchMouseLeave");
        },
        openSearchResult(item){
            //console.log(item.product.product_id);
            this.$router.push({ name: 'product', params: { id: item.product.product_id }})
        }
        
    },
    watch: {
        "$route.params.category": {
            handler: function(category) {
                this.changeCategory();
            },
            deep: true,
            immediate: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/amicaform.scss";
@import "../scss/icofont.css";
$filtersWidth: 250px;
.products-overview {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;

    .filters-wrapper {
        position: relative;
        top: -80px;
        background-color: $amicared;
        height: 150px;
        .filters{
            //position: fixed;
            position: absolute;
            z-index: 800;
            width: 100%;            
            display: flex;
            flex-flow: row-reverse nowrap;
            padding: 65px 20px 10px 20px;
            text-align: left;
            color: white;
            top: 0;
            .filter {
                width: 100%;
            }
            .filter-search{
                padding-right: 20px;
            }
        }
    }

    @media screen and (min-width: $break-small-menu) {
        grid-template-columns: $filtersWidth 1fr;
        grid-template-rows: 1fr;
        .filters-wrapper {
            height: 280px;
            .filters {
                width: $filtersWidth;
                flex-flow: column nowrap;
                .filter {
                    
                }
                .filter-search{
                    padding-right: 0;
                }
            }
        }
    }
}
.search {
    border-bottom: 1px solid grey;
}

.products {
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
select option:hover {
    //box-shadow: 0 0 10px 100px #1882A8 inset;
    font-size: 25px;
}

.searchResult {
    width: 300px;
    display: block;
    height: 45px;
    padding: 6px 12px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    border: 1px solid #555;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        color: white;
        background: $amicared;
    }
}
.form-group{
    position:relative;
}
.icon {
    position: absolute;
    top: 0px;
    right: 5px;
    font-size: 25px;
    cursor: pointer;
    color: $amicared;
    font-weight: 700;
}
</style>
