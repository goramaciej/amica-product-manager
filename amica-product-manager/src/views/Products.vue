<template>
    <div class="products-overview">
        <product-item v-for="(product, key, index) in products" :key="index" :product="product"></product-item>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import productItem from '../components/product/productItem.vue';
export default {
    name: "Products",
    data() {
        return {};
    },
    components: {
        productItem,
    },
    computed: {
        products() {
            let prods = this.$store.getters.products;
            return prods;
        }
    }
};
</script>

<style lang="scss" scoped>
.products-overview{
    display: flex;
    flex-flow: row wrap;
    margin: -12px;
    justify-content: space-evenly;
}
</style>