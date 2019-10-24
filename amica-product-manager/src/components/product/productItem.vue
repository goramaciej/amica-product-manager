<template>
    <div class="product-item" 
        :class="{ 'product-item-big': classBig, 'is-visible': isVisible}" 
        v-observe-visibility="{
            callback: visibilityChanged,
            throttle: 0,
            once: true,
        }"
        >
        <!-- <img :src="product.images[0]" /> -->
        <img :src="product.images[0]" :alt="product.productName" />
        <!-- <loader /> -->
        
    </div>
</template>

<script>
import Loader from "../Loader.vue";
export default {
    name: "productItem",
    data(){
        return{
            isVisible: false,
        }
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
            if (isVisible){
                this.$emit('itemVisible', this.index);
            }
        },
        showMe(delay){
            this.$el.style.transitionDelay = delay+'s';
            this.isVisible = true;
        },
        checkMeOut(){
            //console.log(this.index);
        }
    },
    mounted(){
        this.$emit('registerItem', this);
    }
};
</script>

<style lang="scss" scoped>
.product-item {
    position: relative;
    overflow: hidden;
    margin: 12px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    //transition: width 0.2s, height 0.2s;
    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 0.5s, transform 0.5s ease-in-out;
    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    &.product-item-big {
        width: 200px;
        height: 200px;
    }

    p {
        color: red;
    }

    img {
        transition: transform 0.5s ease-out;
        position: absolute;
        left: -2px;
        top: -4px;
        object-fit: cover;
        width: 104%;
        height: 104%;
    }
    &:hover img {
        transform: scale(1.05);
    }
}
</style>