<template>
    <figure>
        <div class="gallery-wrapper">
            <div class="thumbs">
                <div
                    class="thumb"
                    :class="{active: canShowActive(index)}"
                    v-for="(image, index) in images"
                    :key="index"
                    @click="thumbClicked(index)"
                >
                    <img class="res-image" :src="image" alt="product-image" />
                </div>
            </div>
            <div class="image" v-touch:swipe="swipeHandler" v-some>
                <transition name="fade" mode="out-in">
                    <!-- <img class="res-image" :src="currentImage" :key="clicks" title="goTop" alt /> -->
                    <lazy-image :imgSrc="currentImage" :key="clicks" />
                </transition>
            </div>
        </div>
    </figure>
</template>

<script>
import LazyImage from '../LazyImage.vue'
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
        }
    },
    components: {
        LazyImage
    },
    computed: {
        currentImage() {
            return this.images ? this.images[this.currentImageNum] : "";
        }
    },
    methods: {
        thumbClicked(index) {
            if (index != this.currentImageNum) {
                this.clicks++;
                this.currentImageNum = index;
            }
        },
        canShowActive(index) {
            return index === this.currentImageNum;
        },
        swipeHandler(ev) {
            this.clicks++;
            let num = this.currentImageNum;
            if (ev == "right") {
                if (num - 1 < 0) {
                    this.currentImageNum = this.images.length - 1;
                } else {
                    this.currentImageNum--;
                }
            } else {
                if (num + 1 >= this.images.length) {
                    this.currentImageNum = 0;
                } else {
                    this.currentImageNum++;
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.gallery-wrapper {
    display: flex;
    width: 100%;

    .thumbs {
        margin: 0 $bm;
        flex: 0 0 70px;
        .thumb {
            margin: 0 auto 15px;
            width: 70px;
            height: 70px;
            overflow: hidden;
            border: 2px solid grey;
            transition: border 0.3s ease-in-out;
            cursor: pointer;
            &:hover,
            &.active {
                border: 2px solid red;
            }
        }
    }

    .image {
        flex: 1 1 200px;
        max-height: 340px;
        margin-right: $bm;
    }
}
.res-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>