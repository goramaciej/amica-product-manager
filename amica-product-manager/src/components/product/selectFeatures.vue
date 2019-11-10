<template>
    <div>
        <div class="features-frame">
            <div v-for="(item, key, index) in features" :key="index" class="feature-element">
                <img :src="item.iconURL" />
            </div>
        </div>
        <div class="dropFrame"></div>
        <div class="amica-button" >Kliknij</div>
    </div>
</template>

<script>
export default {
  name: 'selectFeatures',
  data() {
    return {
      selectedIds: [],
    };
  },
  computed: {
    features() {
      // use copy, not reference
      return JSON.parse(JSON.stringify(this.$store.getters.features));
    },
  },
  watch: {
    /* features(val){
            console.log("features has changed");
        } */
  },
};
</script>

<style lang="scss" scoped>
.features-frame {
    width: 50%;
    margin-left: -5px;
    display: flex;
    flex-flow: row wrap;
    .feature-element {
        // display: inline-block;
        margin: 5px;
        width: 40px;
        height: 40px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
