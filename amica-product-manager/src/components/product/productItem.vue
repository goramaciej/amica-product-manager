<template>
    <div class="product-item" :class="{ productItemBig: classBig }">
        <!-- <img :src="product.images[0]" /> -->
        
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
            'classBig':Boolean
        },
        components: {
            Loader
        }
    }
</script>

<style lang="scss" scoped>
.product-item-big {
    transform: scale(2);
}
.product-item{
    position: relative;
    overflow: hidden;
    margin: 12px;
    width: 100px;
    height: 100px;
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
        width: 104%;
        height: 104%;
    }
    &:hover img{
        transform: scale(1.05);
    }
}
.product-item-big{
    width: 200px;
    height: 200px;
}
</style>