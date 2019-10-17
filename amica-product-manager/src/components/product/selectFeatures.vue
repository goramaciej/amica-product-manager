<template>
    <div>
        <div class="featuresFrame">
            <div v-for="(item, key, index) in features" :key="index" class="featureElement">
                <img :src="item.iconURL" />
            </div>
        </div>
        <div class="dropFrame"></div>
        <div class="amica-button" >Kliknij</div>
    </div>
</template>

<script>
export default {
    name: "selectFeatures",
    data() {
        return {
            selectedIds: [],
            
        };
    },
    computed: {
        features(){
            return this.$store.getters.features;
        }
    },
};
</script>
    
<style lang="scss" scoped>
.featuresFrame {
    width: 50%;
    margin-left: -5px;
    display: flex;
    flex-flow: row wrap;
    .featureElement {
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