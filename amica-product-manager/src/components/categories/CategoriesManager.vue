<template>
    <div class="mrow">
        <div class="col">
            <h3>Draggable 1</h3>
            <draggable class="list-group" :list="features" group="people" @change="log">
                <div
                    class="mitem"                    
                    v-for="(element, index) in features"
                    :key="index"
                    :data-tooltip="element.title"
                    data-tooltip-location="right"
                ><img :src="element.iconURL"/></div>
            </draggable>
        </div>

        <div class="col">
            <h3>Draggable 2</h3>
            <draggable class="list-group" :list="list2" group="people" @change="log">
                <div
                    class="mitem"                    
                    v-for="(element, index) in list2"
                    :key="element.name"
                ><img :src="element.iconURL"/></div>
            </draggable>
        </div>

        <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

        <rawDisplayer class="col-3" :value="list2" title="List 2" />-->
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    name: "CategoriesManager",
    display: "Two Lists",
    order: 1,
    components: {
        draggable
    },
    data() {
        return {
            list1: [
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ],
            /*list2: [
                { name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
            ],*/
            list2: []
        };
    },
    computed: {
        features() {
            return this.$store.getters.features;
        }
    },

    methods: {
        log: function(evt) {
            //window.console.log(evt);
            console.dir(this.list2);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../scss/tooltip.scss";
.mrow {
    display: flex;
    justify-content: space-evenly;
}
.mitem{
    width: 60px;
    height: 60px;
    margin: 3px;
    img{
        width: 100%;
        height: 100%;
    }
}
.col {
    width: 40%;
}
.list-group {
    background-color: yellow;
    min-height: 100px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.list-group-item, .mitem {
    cursor: pointer;
}
</style>