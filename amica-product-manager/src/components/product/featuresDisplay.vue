<template>
    <div>
        <div class="features-overview">
            <feature-component v-for="(item, index) in fetchedFeatures" :key="index" :feature="item" />
        </div>
    </div>
</template>

<script>
    import featureComponent from "../features/FeatureComponent.vue";
    export default {
        name:'featuresDisplay',
        props: ["features"],
        components: {
            featureComponent
        },
        computed: {
            fetchedFeatures(){
                let newArr = [];
                if (this.features){
                   //var result = arr.map(person => ({ value: person.id, text: person.name }));
                   newArr = this.$store.getters.features.filter( el => this.features.includes(el.id) )
                }
                return newArr;
            }
        }
    }
</script>

<style lang="scss" scoped>
.features-overview {
    // background-color: pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 0 30px 20px;
    // align-items: flex-start;
}
</style>