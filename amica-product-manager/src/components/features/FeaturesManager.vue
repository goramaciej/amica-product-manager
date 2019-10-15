<template>
    <div class="featuresManager">
        <router-link to="/add_new_feature" class="amica-button">Dodaj nową funkcję</router-link>
        <div class="amica-button" @click="saveOnServer">Zapisz wszystkie funkcje</div>
        <div class="mrt">
            <feature-component v-for="(item, index) in features" :key="index" :feature="item"/>
        </div>
    </div>
</template>

<script>
import featureComponent from "./FeatureComponent.vue";
export default {
    name: "featuresManager",
    data() {
        return {};
    },
    computed: {
        features() {
            return this.$store.getters.features;
        }
    },
    components: {
        featureComponent
    },
    methods: {
        saveOnServer(){
            this.$store.dispatch('sendFeatures');
        }
    },
};
</script>

<style lang="scss">
    .mrt{
        // background-color: pink;
        display:flex;
        flex-wrap: wrap;
        justify-content:center;
        margin-left: 10px;
        // align-items: flex-start;
    }
</style>