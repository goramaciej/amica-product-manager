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
        <select-category />
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
        <add-image @imageadded="addImage" :images="productData.images" />
        <select-features @featuresChange="featuresChange"/>
        <div class="amica-button" @click="addProduct">ADD</div>
        <div class="amica-button" @click="showProductData">SHOW_DATA</div>
    </div>
</template>

<script>
import addImage from './AddImage.vue';
import SelectCategory from './SelectCategory.vue';
import SelectFeatures from './FeaturesManager.vue'
export default {
    data() {
        return {
            productData: {
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
        };
    },

    components: {
        addImage,
        SelectCategory,
        SelectFeatures
    },
    methods: {
        featuresChange(featuresIdsArray){
            console.log("FFA: "+featuresIdsArray);
            this.productData.features = featuresIdsArray;
        },
        addImage(imageurl) {
            this.productData.images.push(imageurl);
        },
        randomNumber() {
            return Math.floor(Math.random() * 100000);
        },
        addProduct(){
            this.$store.commit('ADD_PRODUCT', this.productData);
        },
        showProductData(){
            console.dir (this.productData);
            //console.log(this.$store.getters.products);
        }
    },
    created() {}
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