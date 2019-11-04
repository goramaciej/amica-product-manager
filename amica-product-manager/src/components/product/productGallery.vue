<template>
    <div>
        <div class="cont">
            <div class="thumbs">
            <div class="thumb" :class="{active: canShowActive(index)}" v-for="(image, index) in images" :key="index" @click="thumbClicked(index)">
                <img class="res-image" :src="image" alt="product-image" />
            </div>
        </div>
        <div class="image">
        <transition name="fade" mode="out-in">
            
            <img class="res-image" :src="currentImage" :key="clicks" title="goTop" alt="" />
        </transition>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "productGallery",
    data() {
        return {
            currentImageNum: 0,
            clicks: 0
        };
    },
    props: {
        images: {
            type: Array,
            required: true
        },
    },
    computed: {
        currentImage(){
            return (this.images) ? this.images[this.currentImageNum] : "";
        }
    },
    methods: {
        thumbClicked(index){
            if (index != this.currentImageNum)
            this.clicks++;
            this.currentImageNum = index;
        },
        canShowActive(index){
            return index === this.currentImageNum;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
    .cont{
        display: flex;
        width: 100%;
    }
    .thumbs{
        margin: 0 $bm;
        flex: 0 0 70px;
    }
    .thumb{
        margin: 0 auto 15px;
        width: 70px;
        height: 70px;
        overflow: hidden;
        border: 2px solid grey;
        transition: border 0.3s ease-in-out;
        cursor: pointer;
        &:hover, &.active{
            border: 2px solid red;
        }
    }
    .image {
        flex: 1 1 200px;
        max-height: 340px;
        margin-right: $bm;
    }
    .res-image{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>