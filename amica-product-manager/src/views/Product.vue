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
import FeaturesDisplay from "../components/product/featuresDisplay.vue";
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
        productName() {
            if (this.productData) {
                return this.productData.productName;
            } else {
                return "";
            }
        },
        productDescription() {
            if (this.productData) {
                return this.productData.description.replace(
                    this.productName,
                    ""
                );
            } else {
                return "";
            }
        },
        featuresData() {
            let newArr = [];
            if (this.productData) {
                newArr = this.productData.features;
            }
            return newArr;
        },
        getImages() {
            return this.productData ? this.productData.images : [];
        }
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/shared.scss";
.product {
    margin: -$bm auto 0;
    max-width: $break-xlarge;
    padding-top: $bm;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "gallery"
        "info"
        "features";

    .gallery {
        margin-top: $bm;
        width: 100%;
        overflow: hidden;
        grid-area: gallery;
    }
    .info {
        // background-color: yellow;
        grid-area: info;
        background-color: $amicared;
        color: white;
        text-align: left;
        margin: $bm 0;
        padding: 0 $bm;
        h3,
        h4 {
            text-align: left;
            font-size: 18px;
        }
    }
    .features {
        grid-area: features;
        padding: 0 0 0 $bm;
    }

    @media screen and (min-width: $break-small-menu) {
        grid-template-columns: 600px 1fr;
        grid-auto-rows: minmax(30px, auto);
        grid-template-areas:
            "gallery info"
            "features features";

        .info {
            grid-area: info;
            margin: 0;
            padding: $bm;
            h3 {
                font-size: 2.5vw;
                text-align: right;
            }
            h4 {
                font-size: 1.6vw;
                text-align: right;
            }
        }
        .features{
            padding: $bm 0 0 $bm;
        }
    }
    @media screen and (min-width: $break-xlarge) {
        .info {
            margin-right: $bm;
            h3 {
                font-size: 30px;
                text-align: right;
            }
            h4 {
                font-size: 22px;
                text-align: right;
            }
        }
    }
}
</style>