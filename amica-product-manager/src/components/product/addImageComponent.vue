<template>
        <div
            class="drop dashed-background"
            @dragover.prevent
            @drop="onDrop"
        >
            <img v-for="(url, key, index) in images"
                    :key="index"
                    class="product-image"
                    :src="url" />
                <!-- <img class="product-image" :src="url" /> -->
            </div>

</template>

<script>
export default {
  name: 'addImage',
  props: {
    images: Array,
  },
  methods: {
    onDrop(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      const imageUrl = evt.dataTransfer.getData('text/html');
      const rex = /src="?([^"\s]+)"?\s*/;
      const url = rex.exec(imageUrl);
      this.$emit('imageadded', url[1]);
    },
  },
};
</script>

<style lang="scss" scoped>
    p {
        text-align: left;
    }
    .drop {
        width: 100%;
        min-height: 60px;
        display: flex;
        flex-flow: row wrap;
        justify-content:center;
        align-items: center;
    }

    .product-image{
        height: 80px;
        padding: 0px;
        background-color: white;
        margin: 10px;
        border: 1px solid black;
        border-radius: 5px;
    }
</style>
