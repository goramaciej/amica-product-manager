<template>
    <div class="amicaform">
        <h4>Dodaj nowy produkt:</h4>
        <p class="validateText" 
            v-if="showValidation && productData.productName.length<3">Wprowadź nazwę produktu (min. 2 znaki)</p>
        <div class="form-group">
            <input
                type="text"
                id="productName"
                class="form-control"
                placeholder="Wprowadź nazwę produktu"
                v-model="productData.productName"
            />
        </div>
        <h5>Wybierz kategorię i podkategorię produktu:</h5>
        <p class="validateText" 
            v-if="showValidation && productData.cat == 0">Proszę wybrać kategorię produktu</p>
        <select-category @change="categorySelected" :key="'a' + componentKey"/>
        <h5>Dodaj opis produktu:</h5>
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
        <h5>Dodaj zdjęcia produktu przeciągając je z innego okna przeglądarki:</h5>
        <p class="validateText" 
            v-if="showValidation && productData.images.length<1">Produkt musi posiadać minimum 1 zdjęcie</p>
        <add-image @imageadded="addImage" :images="productData.images" :key="'b' + componentKey"/>
        <h5>Przeciągnij do prawej ramki funkcje produktu:</h5>
        <p class="validateText" 
            v-if="showValidation && productData.features.length<1">Produkt musi posiadać minimum 1 funkcję</p>
        <select-features @featuresChange="featuresChange" :key="'c' + componentKey"/>
        <div class="buttons">
            <div class="amica-button" @click="saveProduct">Zapisz</div>
        </div>
    </div>
</template>

<script>
import addImage from '../components/product/addImageComponent.vue';
import selectCategory from '../components/product/categoriesSelector.vue';
import selectFeatures from '../components/product/featuresSelector.vue';
//import productData from './productData.js'
export default {
    data() {
        return {
            productData: {
                
            },
            componentKey: 0,
            showValidation: false
        };
    },

    components: {
        addImage,
        selectCategory,
        selectFeatures
    },
    methods: {
        categorySelected(category, subcategory=0){
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
        },
        validate(){
            if (this.productData.cat==0 || 
                this.productData.productName.length < 2 || 
                this.productData.images.length<1 ||
                this.productData.features.length<1){
                    this.showValidation = true;
                    window.scrollTo(0, 0);
                    return false;
            }else{
                this.showValidation = false;
                return true;
            }
            // block scroll
            //document.querySelector('body').style.overflow = 'hidden';
           
        },
        addProduct(){
            this.$store.commit('ADD_PRODUCT', this.productData);
        },
        saveProduct(){
            if (this.validate()){
                this.$store.commit('ADD_PRODUCT', this.productData);
                this.$store.dispatch('sendProducts');
                this.clear();
            }
        },
        // removeValidation(){
        //     //document.querySelector('body').style.overflow = 'auto';
        //     this.showValidation = false;
        // }
    },
    created(){
        this.initData ();
    },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.validateText{
    text-align: left;
    color: red;
    font-size: 13px;
    font-weight: 700;
    font-style: italic;
}

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
.buttons{
    text-align: right;
    margin: $bm 0;
}
</style>