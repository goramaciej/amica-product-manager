<template>
    <div class="feature">
        <img :src="feature.iconURL" class="feature-icon" alt />
        <!-- <img :src="feature.imageURL" class="img-responsive" alt /> -->
        <lazy-image class="img-responsive" :class="{active: imageLoaded}" :imgSrc="feature.imageURL" @imageLoaded="imageLoadedF"/>
        <div class="feature-inner">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
        </div>
    </div>
</template>

<script>
import LazyImage from '../LazyImage.vue'
export default {
    name: "featureItem",
    props: ["feature"],
    data(){
        return {
            imageLoaded: false
        }
    },
    components: {
        LazyImage
    },
    methods: {
        imageLoadedF(){
            this.imageLoaded = true;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/shared.scss";
@import "../../scss/variables.scss";
.feature {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 360px;
    padding: $bm $bm $bm 0;
    .feature-icon {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 25%;
        z-index: 10;
        transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.92, 1.3);
    }
    &:hover .feature-icon {
        transform: scale(1.2);
    }
    .img-responsive {
        display: block;
        height: 80px;
        max-height: 80px;
        // max-width: 100%;
        // max-height: 100%;
        // width: auto;
        // height: auto;
        padding-left: $bm;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
        &.active {
            height: auto;
            max-height: 240px;
        }
    }
    .feature-inner {
        padding-left: $bm;
        p {
            font-size: 14px;
            text-align: justify;
            line-height: 1.4;
        }
    }
}
</style>