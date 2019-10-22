<template>
    <div class="product-item">
        <!-- <img :src="product.images[0]" /> -->
        <!-- Zdzicho: {{ product.productName }} -->
        
        <img :src="product.images[0]" :alt="product.productName" />
        <loader />
    </div>
</template>

<script>
import Loader from '../Loader.vue';
    export default {
        name: 'productItem',
        props: {
            'product':Object,
        },
        components: {
            Loader
        }
    }
</script>

<style lang="scss" scoped>
.product-item{
    position: relative;
    overflow: hidden;
    margin: 12px;
    width: 200px;
    height: 200px;
    cursor: pointer;
    p{
        color: red;
    }

    img {
        transition: transform .5s ease-out;
        position: absolute;
        left: -2px;
        top: -4px;
        object-fit: cover;
        width: 208px;
        height: 208px;
    }
    &:hover img{
        transform: scale(1.05);
    }
    

}
</style>