<template>
    <div class="features-manager" id="features-manager-container" @mousemove="mouseContainerMoving">
        <div class="amica-tooltip" id="features-tooltip">Blokada rodzicielska</div>
        <div class="col" id="containerLeft">
            <draggable class="list-group" :list="features" group="people" @change="log" id="bcga">
                <div
                    class="feature-item"
                    v-for="(element, index) in features"
                    :key="index"
                    :data-tooltip="element.title"
                    data-tooltiplocation="left"
                    @mouseover="mouseEnter"
                    @mouseleave="mouseLeave"
                    @mousemove="mouseMoving"
                    @mousedown="mouseLeave"
                    @dragstart="startDrag"
                    @dragend="endDrag"
                >
                    <img :src="element.iconURL" />
                </div>
            </draggable>
        </div>

        <div class="col" id="containerRight">
            <draggable class="list-group" :list="selectedItems" group="people" @change="log">
                <div
                    class="feature-item"
                    v-for="(element, index) in selectedItems"
                    :key="element.name"
                    @mouseover="mouseEnter"
                    @mouseleave="mouseLeave"
                    @mousemove="mouseMoving"
                    @mousedown="mouseLeave"
                    @dragstart="startDrag"
                    @dragend="endDrag"
                    :data-tooltip="element.title"
                    data-tooltiplocation="right"
                >
                    <img :src="element.iconURL" />
                </div>
            </draggable>
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    name: "featuresManager",
    display: "Two Lists",
    order: 1,
    components: {
        draggable
    },
    data() {
        return {
            selectedItems: [],

            tooltip: null,
            container: null,
            dragging: false,
            movedAfterDrag: true,
        };
    },
    computed: {
        features() {
            return this.$store.getters.features;
        }
    },
    mounted() {
        this.tooltip = document.querySelector("#features-tooltip");
        this.container = document.querySelector("#features-manager-container");
    },

    methods: {
        log: function(ev){

        },
        mouseContainerMoving: function(ev) {
            if (!this.movedAfterDrag) this.movedAfterDrag = true;
        },
        mouseEnter(ev) {
            this.tooltip.textContent = ev.target.dataset.tooltip;
            if ((!this.dragging) && (this.movedAfterDrag)) {
                this.tooltip.classList.add("mactive");
            }
        },
        mouseLeave() {
            this.tooltip.classList.remove("mactive");
        },
        startDrag(ev) {
            this.dragging = true;
        },
        endDrag(ev) {
            this.dragging = false;
            this.movedAfterDrag = false;
        },
        mouseMoving(ev) {
            let y = ev.pageY ;
            this.tooltip.style.top = y + "px";

            let x = ev.pageX + 10;
            if (ev.target.dataset.tooltiplocation=='right'){
                x = ev.pageX - 200;
            }
            this.tooltip.style.left = x + "px";
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../scss/tooltip.scss";

.features-manager {
    display: flex;
    justify-content: space-evenly;
}
.feature-item {
    width: 60px;
    height: 60px;
    margin: 3px;
    img {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
}
.col {
    position: relative;
    width: 40%;
}
.list-group {
    background-color: yellow;
    min-height: 1800px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.list-group-item,
.feature-item {
    cursor: pointer;
}
</style>