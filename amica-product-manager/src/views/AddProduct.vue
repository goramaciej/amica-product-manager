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
        <h5>Wybierz kategorię i podkategorię produktu:</h5>
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
        <add-image @imageadded="addImage" :images="productData.images" :key="'b' + componentKey"/>
        <h5>Przeciągnij do prawej ramki funkcje produktu:</h5>
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
        };
    },

    components: {
        addImage,
        selectCategory,
        selectFeatures
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
        saveProduct(){
            this.$store.commit('ADD_PRODUCT', this.productData);
            this.$store.dispatch('sendProducts');
            this.clear();
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

<style lang="scss" scoped>
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
    margin: 20px 0;
}
</style>