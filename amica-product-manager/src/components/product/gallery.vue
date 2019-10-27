<template>
    <div>
        <div class="cont">
            <div class="thumbs">
            <div class="thumb" v-for="(image, index) in images" :key="index" @click="thumbClicked(index)">
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
    name: "gallery",
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
            this.clicks++;
            this.currentImageNum = index;
        },
    }
};
</script>

<style lang="scss" scoped>
    .cont{
        display: flex;
        width: 100%;
    }
    .thumbs{
        flex: 0 0 100px;
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
        flex: 1 1 100px;
        max-height: 350px;
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