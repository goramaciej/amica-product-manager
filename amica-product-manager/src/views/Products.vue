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

                    <div class="form-group">
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
                            <div v-if="searchItemWarning.length > 0" class="searchResult disabled"> {{ searchItemWarning }}</div>
                            <div class="searchResult" v-for="(item, index) in searchArr" :key="index" @click="openSearchResult(item)">{{ item.description }}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="products">
            <loader v-if="!allProducts.length>0"/>
            <h4 v-if="products.length==0 && allProducts.length>0">Brak produktów w tej kategorii</h4>
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
import loader from "../components/Loader.vue";
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
            clearSearchButton: false,
            searchItemWarning: ''
        };
    },
    components: {
        productItem,
        loader
    },
    computed: {
        allProducts() {
            return JSON.parse(
                    JSON.stringify(this.$store.getters.products)
                );
        },
        products: {
            get: function() {
                if (this.selectedCategory == 0) {
                    return this.allProducts;
                } else {
                    return this.allProducts.filter(el => {
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
            let tex = ev.target.value;
            if (tex.length > 2){
                this.searchArr = this.allProducts.filter( item => {
                    return (item.description.toLowerCase().includes(tex.toLowerCase()));
                });
                if (this.searchArr.length < 1){
                    this.searchItemWarning = "Brak produktów z frazą: "+tex;
                }else{
                    this.searchItemWarning = "";
                }
            }else if (tex.length > 0){
                this.searchArr = [];
                this.searchItemWarning = "min. 2 znaki";
            }else{
                this.searchArr = [];
                this.searchItemWarning = "";
            }
            this.clearSearchButton = tex.length > 0;            
        },
        clearSearch(){
            this.searchArr = [];
            this.searchItemWarning = "";
            this.clearSearchButton = false;
            this.$refs.searchInput.value = "";
        },
        openSearchResult(item){
            this.$router.push({ name: 'product', params: { id: item.item.product_id }})
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
    grid-template-rows: 90px 1fr;

    .filters-wrapper {
        position: relative;
        top: -60px;
        background-color: $amicared;
        height: 150px;
        .filters{
            //position: fixed;
            position: absolute;
            z-index: 800;
            width: 100%;            
            display: flex;
            flex-flow: row-reverse nowrap;
            padding: 65px $bm 10px $bm;
            text-align: left;
            color: white;
            top: 0;
            .filter {
                width: 100%;
            }
            .filter-search{
                padding-right: $bm;
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
                padding: 80px $bm 10px $bm;
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
    width: 100%;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
select option:hover {
    //box-shadow: 0 0 10px 100px #1882A8 inset;
    font-size: 25px;
}
.searchResults{
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    overflow-y: auto; 
    max-height: calc(100vh - 240px);
    .searchResult {
        white-space: nowrap;
        max-width: 90vw;
        min-height: 30px;
        text-overflow: ellipsis;
        overflow: hidden; 
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 12px;
        color: #555;
        background-color: rgba(255, 255, 255, 0.9);
        border-bottom: 1px solid #555;
        cursor: pointer;
        &:hover{
            color: white;
            background: $amicared;
        }
        &.disabled{
            pointer-events: none;
        }
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
