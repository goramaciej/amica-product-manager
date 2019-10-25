<template>
    <div
        class="product-item"
        :class="{ 'product-item-big': classBig, 'is-visible': isVisible}"
        v-observe-visibility="{
            callback: visibilityChanged,
            throttle: 0,
            //once: true,
        }"
        @click="productSelected"
    >
        <img :src="product.images[0]" :alt="product.productName" />
        <div class="description">
            <h4>{{ product.productName }}</h4>
            <p>{{ this.desc }}</p>
        </div>
    </div>
</template>

<script>
import Loader from "../Loader.vue";
export default {
    name: "productItem",
    data() {
        return {
            isVisible: false,
            desc: this.product.description.replace(this.product.productName, ""),
            visibilityChangedRequested: false
        };
    },
    props: {
        product: Object,
        classBig: Boolean,
        index: Number
    },
    components: {
        Loader
    },
    methods: {
        visibilityChanged(isVisible, entry) {
            if (isVisible) {
                this.$emit("itemVisible", {
                    index: this.index,
                    id: this.product.product_id,
                })
            }
        },
        showMe(delay) {
            this.$el.style.transitionDelay = delay + "s";
            this.isVisible = true;
        },
        productSelected(){
            //router.push({ name: 'Product', params: { id: this.product.product_id } });
            this.$router.push('products/product/'+this.product.product_id);
        }
    },
    mounted() {
        this.$emit("registerItem", this);
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.description {
    width: 100%;
    background: $amicared;
    color: white;
    padding: 7px 10px;
    z-index: 20;
    bottom: 0;
    position: absolute;
    transform: translateY(100%);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    p {
        color: white;
        font-size: 12px;
        text-align: right;
        line-height: 13px;
    }
    h4 {
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        text-align: right;
        margin: 6px 0;
    }
}
.product-item {
    position: relative;
    overflow: hidden;
    margin: 12px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border: 1px solid #b9b9b9;
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.4s, transform 0.4s ease-out;
    &.is-visible {
        opacity: 1;
        transform: translateX(0);
    }

    &.product-item-big {
        width: 200px;
        height: 200px;
    }

    img {
        transition: transform 0.5s ease-out;
        //opacity: 0;
        position: relative;
        left: -2px;
        top: -4px;
        object-fit: cover;
        width: 104%;
        height: 104%;
        z-index: 10;
    }
    &:hover img {
        transform: scale(1.05);
    }
    &:hover .description {
        transform: translateY(7px);
    }
}
</style>
