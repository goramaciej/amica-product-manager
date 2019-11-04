<template>
    <div
        class="product-item"
        v-observe-visibility="{
            callback: visibilityChanged,
        }">
        <img :src="product.images[0]" :alt="product.productName" />
    </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
    name: "productItem",
    data() {
        return {
            
        };
    },
    props: {
        imgSrc: String,
    },
    components: {
        Loader
    },
    methods: {
        visibilityChanged(isVisible, entry) {
            if (isVisible) {
                // this.$emit("itemVisible", {
                //     index: this.index,
                //     id: this.product.product_id,
                // })
            }
        },
    },
};
</script>

<style lang="scss" scoped>
// @import "../../scss/variables.scss";
</style>