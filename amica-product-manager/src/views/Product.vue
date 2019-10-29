<template>
    <div class="product">
        <div class="gallery">
            <gallery :images="getImages" />
        </div>
        <div class="info">
            <h4>{{ productDescription }}</h4>
            <h3>{{ productName }}</h3>
        </div>
        <features-display class="features" :features="featuresData">
            <!-- <button>show</button> -->
        </features-display>
        <!-- This is product: {{ $route.params.id }} -->
    </div>
</template>

<script>
import Gallery from "../components/product/gallery.vue";
import FeaturesDisplay from "../components/product/featuresDisplay"
export default {
    name: "Product",
    data() {
        return {};
    },
    components: {
        Gallery,
        FeaturesDisplay
    },
    computed: {
        productData() {
            const pr = JSON.parse(
                JSON.stringify(this.$store.getters.products)
            ).find(el => el.product_id == this.$route.params.id);
            return pr;
        },
        productName(){
            if (this.productData){
                return this.productData.productName;
            }else{
                return "";
            }
        },
        productDescription(){
            if (this.productData){
                return this.productData.description.replace(this.productName, '');
            }else{
                return "";
            }            
        },
        featuresData(){
            let newArr = [];
            if (this.productData){
                newArr = this.productData.features
            }
            return newArr;
        },
        getImages() {
            return this.productData ? this.productData.images : [];
        }
    },
    methods: {
        
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.product {
    max-width: 1200px;
    margin: 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    //grid-template-columns: 1fr 200px;
    //grid-auto-rows: minmax(30px, auto);
    //grid-template-rows: 300px 400px 1fr;
    grid-template-areas:
        "gallery"
        "info"
        "features";

    .gallery {
        width: 100%;
        overflow: hidden;
        grid-area: gallery;
    }
    .info {
        // background-color: yellow;
        grid-area: info;
        padding-right: 20px;
    }
    .features {
        
        height: 100px;
        grid-area: features;
    }
    h3 {

        font-weight: 700;
        font-size: 18px;
        margin-top: 10px;
    }
    h4{

    }

    @media screen and (min-width: 740px) {
        grid-template-columns: 1fr 300px;
        grid-auto-rows: minmax(30px, auto);
        grid-template-areas:
            "gallery info"
            "features features";
        h3 {
            font-size: 2vw;
            text-align: right;
        }
        h4{
            text-align: right;
        }
    }
}
</style>