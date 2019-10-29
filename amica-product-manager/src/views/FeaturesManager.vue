<template>
    <div class="featuresManager">
        <div class="buttons">
            <router-link tag="div" :to="{name: 'addNewFeature'}" class="amica-button">Dodaj nową funkcję</router-link>
        <div class="amica-button" @click="saveOnServer">Zapisz wszystkie funkcje</div>
        </div>

        <features-display class="inner-features" :features="[]" :show-all-features="true">

        </features-display>
    </div>
</template>

<script>
//import featureComponent from "../components/features/FeatureComponent.vue";
import FeaturesDisplay from "../components/product/featuresDisplay.vue";
export default {
    name: "featuresManager",
    data() {
        return {};
    },
    components: {
        //featureComponent
        FeaturesDisplay //remember - set show-all-features on this component to true to get data from axios
    },
    methods: {
        saveOnServer(){
            this.$store.dispatch('sendFeatures');
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
    .inner-features{
        padding: $bm 0 0 $bm;
    }
</style>