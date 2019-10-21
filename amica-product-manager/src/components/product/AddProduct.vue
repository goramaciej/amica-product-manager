<template>
    <div class="amicaform">
        <h4>Dodaj nowy produkt:</h4>
        <div class="form-group">
            <input
                type="text"
                id="productName"
                class="form-control"
                placeholder="Wprowadź nazwę produktu"
                v-model="productData.productName"
            />
        </div>
        <select-category @change="categorySelected" :key="'a' + componentKey"/>
        <div class="form-group">
            <textarea
                cols="40"
                rows="5"
                type="text"
                id="productDescription"
                class="form-control"
                placeholder="Wprowadź opis produktu"
                v-model="productData.description"
            ></textarea>
        </div>
        <add-image @imageadded="addImage" :images="productData.images" :key="'b' + componentKey"/>
        <select-features @featuresChange="featuresChange" :key="'c' + componentKey"/>
        <div class="amica-button" @click="addProduct">Dodaj produkt</div>
        <div class="amica-button" @click="clear">Wyczyść</div>
        <div class="amica-button" @click="saveProducts">Zapisz</div>
    </div>
</template>

<script>
import addImage from './AddImage.vue';
import SelectCategory from './SelectCategory.vue';
import SelectFeatures from './FeaturesManager.vue';
//import productData from './productData.js'
export default {
    data() {
        return {
            productData: {
                
            },
            componentKey: 0,
        };
    },

    components: {
        addImage,
        SelectCategory,
        SelectFeatures
    },
    methods: {
        categorySelected(category, subcategory=0){
            console.log("category selected: " + category +" : " + subcategory);
            this.productData.cat = category;
            this.productData.subcat = subcategory
        },
        addImage(imageurl) {
            this.productData.images.push(imageurl);
        },
        featuresChange(featuresIdsArray){
            this.productData.features = featuresIdsArray;
        },
        randomNumber() {
            return Math.floor(Math.random() * 100000);
        },

        addProduct(){
            this.$store.commit('ADD_PRODUCT', this.productData);
        },
        saveProducts(){
            this.$store.dispatch('sendProducts');
        },
        clear(){
            this.initData();
            this.componentKey++;
            window.scrollTo(0,0);
        },
        initData(){
            this.productData = {
                cat: 0,
                subcat: 0,
                product_id: this.randomNumber(),
                productName: "",
                description: "",
                images: [],
                features: [],
                dimensions: {
                    width: 0,
                    height: 0,
                    depth: 0
                },
                energyClass: "",
                color: "",
                power: 0
            }
        }
    },
    created(){
        this.initData ();
    },
};
</script>

<style lang="scss">
@import "../../scss/amicaform.scss";
.imagediv {
    display: inline-block;
    margin: 0 10px;
}
.row {
    width: 80%;
}
.images {
    display: block;
    width: 100%;
}
textarea {
    resize: none;
}
</style>