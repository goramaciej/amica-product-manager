<template>
    <div class="products-overview">
        <div class="filters">
            <div class="filters-element"></div>
        </div>
        <div class="products">
            <product-item
                v-for="(product, index) in products"
                :key="index"
                :product="product"
                :classBig="itemsBig"
                :index="index"
                :ref="'item' + index"
                @itemVisible = "addVisibleItemId"
                @registerItem = "registerItem"
            ></product-item>
        </div>
        
        <!-- <router-view></router-view> -->
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
            showArr: []
        };
    },
    components: {
        productItem
    },
    computed: {
        products() {
            const prods = JSON.parse(JSON.stringify(this.$store.getters.products));
            return prods;
        },
    },
    methods: {
        registerItem(item){
            this.registeredItems.push(item);
        },        
        addVisibleItemId(index){
            if (this.showArr.length == 0){
                setTimeout(this.showArrayFilled, 400);
            }
            this.showArr.push(index);
        },
        showArrayFilled(){
            this.showArr.sort((a,b)=> a-b);
            //console.log(this.showArr);
            for (let i=0; i<this.showArr.length; i++){
                this.registeredItems[this.showArr[i]].showMe(i/8);
            }
            this.showArr = [];
        },
        clicked(){
            //registeredItems[0].checkMeOut();
            for (let num of this.registeredItems){
                num.showMe(2);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.button{
    position: absolute;
    top: 100px;
}
.products-overview{
    position: relative;
    display: grid;
    grid-template-columns: 300px 1fr;
}
.filters {
    position: relative;
    top: -80px;
    width: 300px;
    height: 200px;
    .filters-element{
        position: fixed;
        width: 300px;
        height: 200px;
        background-color: $amicared;
    }
}
.tryToObserve {
    font-size: 50px;
    color: red;
}
.products {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
</style>