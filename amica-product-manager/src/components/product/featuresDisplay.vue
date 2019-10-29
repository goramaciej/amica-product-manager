<template>
    <div>
        <div class="features-overview">
            <feature-component
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
import featureComponent from "../features/FeatureComponent.vue";
export default {
    name: "featuresDisplay",
    props: ["features"],
    components: {
        featureComponent
    },
    computed: {
        fetchedFeatures() {
            let newArr = [];
            if (this.features) {
                //var result = arr.map(person => ({ value: person.id, text: person.name }));
                newArr = this.$store.getters.features.filter(el =>
                    this.features.includes(el.id)
                );
            }
            return newArr;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.features-overview {
    display: flex;
    flex-wrap: wrap;
}
.flex-locator {
    flex: 1 0 260px;
}
.flex-locator:empty {
    height: 0;
    border: none;
}
</style>