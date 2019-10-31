<template>
    <div>
        <div class="features-overview">
            <loader v-if="fetchedFeatures.length<0"/>
            <feature-item
                class="flex-locator"
                v-for="(item, index) in fetchedFeatures"
                :key="index"
                :feature="item"
            />

            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
            <div class="flex-locator"></div>
        </div>
    </div>
</template>

<script>
import featureItem from "./featureItem.vue";
export default {
    name: "featuresCollection",
    props: {
        features: Array,
        showAllFeatures: Boolean
    },
    components: {
        featureItem
    },
    computed: {
        fetchedFeatures() {
            let featuresData = [];
            if (this.showAllFeatures) {
                featuresData = this.$store.getters.features;
            } else {
                if (this.features) {
                    //var result = arr.map(person => ({ value: person.id, text: person.name }));
                    featuresData = this.$store.getters.features.filter(el =>
                        this.features.includes(el.id)
                    );
                }
            }
            return featuresData;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.features-overview {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: $bm;
    margin-right: -10px;
}
.flex-locator {
    flex: 1 0 260px;
}
.flex-locator:empty {
    height: 0;
    border: none;
}
</style>