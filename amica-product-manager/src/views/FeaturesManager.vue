<template>
    <div class="featuresManager">
        <div class="buttons">
            <router-link tag="div" :to="{name: 'addNewFeature'}" class="amica-button">Dodaj nową funkcję</router-link>
        <div class="amica-button" @click="saveOnServer">Zapisz wszystkie funkcje</div>
        </div>

        <features-collection class="inner-features" :features="[]" :show-all-features="true">

        </features-collection>
    </div>
</template>

<script>
import featuresCollection from "../components/features/featuresCollection.vue";
export default {
    name: "featuresManager",
    data() {
        return {};
    },
    components: {
        featuresCollection //remember - set show-all-features on this component to true to get data from axios
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
    .featuresManager{
        padding-top: 10px;
    }
    .inner-features{
        overflow: hidden;
    }
</style>