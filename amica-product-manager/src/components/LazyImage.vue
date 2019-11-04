<template>
    <div
        class="product-item"
        :class="{'is-visible': isVisible}"
        v-observe-visibility="{
            callback: visibilityChanged,
            throttle: 0,
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
import Loader from "./Loader.vue";
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
            this.$router.push({ name: 'product', params: { id: this.product.product_id }})
        }
    },
    mounted() {
        this.$emit("registerItem", this);
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
</style>