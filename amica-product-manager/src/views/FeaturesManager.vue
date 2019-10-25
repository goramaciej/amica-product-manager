<template>
    <div class="featuresManager">
        <router-link tag="li" to="/features-manager/add-new-feature" class="amica-button">Dodaj nową funkcję</router-link>
        <div class="amica-button" @click="saveOnServer">Zapisz wszystkie funkcje</div>
        <div class="features-overview">
            <feature-component v-for="(item, index) in features" :key="index" :feature="item"/>
        </div>
    </div>
</template>

<script>
import featureComponent from "../components/features/FeatureComponent.vue";
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
    mounted(){
        console.log("Features Mounted");
    }
};
</script>

<style lang="scss">
    .features-overview{
        // background-color: pink;
        display:flex;
        flex-wrap: wrap;
        justify-content:center;
        margin: 20px 0 30px 20px;
        // align-items: flex-start;
    }
</style>