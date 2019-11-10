<template>
    <div
        class="lazy-image-wrapper"
        v-observe-visibility="{
            callback: visibilityChanged,
        }"
    >
        <loader class="loader" v-if="!imageLoaded && itemVisible" />
        <transition name="image-transition">
            <img src="" alt="image" class="res-image" :class="{'not-responive': !isResponsive}" v-show="imageLoaded" />
            </transition>
    </div>
</template>

<script>
import Loader from './Loader.vue';

export default {
  name: 'lazyImage',
  data() {
    return {
      itemVisible: false,
      imageElement: null,
      imageLoaded: false,
      wasVisible: false,
    };
  },
  props: {
    imgSrc: String,
    isResponsive: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Loader,
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible && !this.wasVisible) {
        this.wasVisible = true;
        this.itemVisible = true;
        this.loadImage();
      }
    },
    loadImage() {
      this.imageElement = this.$el.querySelector('.res-image');
      if (this.imageElement) {
        if (this.imgSrc) {
          this.imageElement.addEventListener('load', (ev) => {
            setTimeout(this.imageLoadedF(ev), 300);
          });
          // this.imageElement.addEventListener("error", (ev) => console.log(ev));
          this.imageElement.src = this.imgSrc;
        } else {
          setTimeout(this.loadImage, 200);
        }
      }
    },
    imageLoadedF(ev) {
      this.$emit('imageLoaded');
      this.imageLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../../scss/variables.scss";
.lazy-image-wrapper {
    position: relative;
    .loader {
        position: absolute;
        top: calc(50% - 16px);
        left: calc(50% - 16px);
        width: 32px;
    }
    .res-image {
        object-fit: contain;
        width: 100%;
        //height: 100%;
    }
}
.image-transition-enter, .image-transition-leave-to{
    visibility: hidden;
    opacity: 0;
}
.image-transition-enter-active, .image-transition-leave-active{
    transition: visibility 0.5s, opacity 0.5s;
}
.not-responive{
    height: 100%;
}
</style>
