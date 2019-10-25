<template>
    <div class="features-manager" id="features-manager-container" @mousemove="mouseContainerMoving">
        <div class="c-tooltip" id="features-tooltip">Blokada rodzicielska</div>
        <div class="col" id="containerLeft">
            <draggable class="list-group dashed-background" group="features"
            :list="itemsFromStore">
                <div
                    class="feature-item"
                    v-for="(element, index) in itemsFromStore"
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
            <draggable class="list-group dashed-background" group="features" 
            :list="selectedItems" @change="featuresListChanged">
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
        itemsFromStore() {
            let items = JSON.parse(JSON.stringify(this.$store.getters.features));
            return items;
        }
    },
    mounted() {
        this.tooltip = document.querySelector("#features-tooltip");
        this.container = document.querySelector("#features-manager-container");
    },

    methods: {
        featuresListChanged: function(ev){
            // immediately emit data to refresh "product data" in addProduct
            let featuresArr = this.selectedItems.map(({ id }) => id)
            this.$emit('featuresChange', featuresArr);
        },
        mouseContainerMoving(ev) {
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
}
</script>
<style lang="scss" scoped>
@import "../../scss/tooltip.scss";
@import "../../scss/variables.scss";

.features-manager {
    display: flex;
    justify-content: space-between;
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
    width: 48%;
}
.list-group {
    min-height: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
    padding: 10px;
}
.list-group-item,
.feature-item {
    cursor: pointer;
}
</style>
