<template>
    <div class="features-manager" id="features-manager-container" >
        <div class="amica-tooltip" id="features-tooltip"></div>
        <div class="col" id="containerLeft">
            <draggable class="list-group dashed-background" group="features"
            :list="itemsFromStore" @start="startDrag" @end="endDrag">
                <div
                    class="feature-item"
                    v-for="(element, index) in itemsFromStore"
                    :key="index"
                    :data-tooltip="element.title"
                    data-tooltiplocation="left"

                    @mouseover="mouseEnter"
                    @mouseenter="mouseEnter"
                    @mouseleave="mouseLeave"
                    @mousedown="mouseEnter"
                    @mousemove="mouseMoving"
                    
                    v-touch:start="touchStart"
                    v-touch:moving="touchMove"

                    :class="{dragge: meDragging}"
                >
                    <img :src="element.iconURL" />
                </div>
            </draggable>
        </div>

        <div class="col" id="containerRight">
            <draggable class="list-group dashed-background" group="features" 
            :list="selectedItems" @change="featuresListChanged" @start="startDrag"
            @end="endDrag">
                <div
                    class="feature-item"
                    v-for="(element, index) in selectedItems"
                    :key="element.name"
                    :data-tooltip="element.title"
                    data-tooltiplocation="right"
                    
                    @mouseover="mouseEnter"
                    @mouseenter="mouseEnter"
                    @mouseleave="mouseLeave"
                    @mousedown="mouseEnter"
                    @mousemove="mouseMoving"
                    
                    v-touch:start="touchStart"
                    v-touch:moving="touchMove"
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
    name: "featuresSelector",
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

            meDragging: false,

            touchStartX: 0,
            touchStartY: 0,
            mouseX: 0,
            mouseY: 0,
            touchX: 0,
            touchY: 0
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
        mouseEnter(ev) {
            this.tooltip.textContent = ev.target.dataset.tooltip;            

            if (!this.dragging){
                this.tooltip.classList.add("mactive");
            }
        },
        mouseLeave() {
            this.tooltip.classList.remove("mactive");
        },
        startDrag(ev) {
            this.dragging = true;
            //this.tooltip.style.top = "-2000px";
        },
        endDrag(ev) {
            this.dragging = false;
        },
        mouseMoving(ev) {
            let y = ev.pageY - 120;
            let x = ev.pageX - 20 - this.container.getBoundingClientRect().left;
            if (ev.target.dataset.tooltiplocation=='right'){
                x = ev.pageX - 170 - this.container.getBoundingClientRect().left;
            }
            this.tooltip.style.top = y + "px";
            this.tooltip.style.left = x + "px";
        },

        draggingInProgress(ev){
            //this.mouseX = ev.clientX;
            //this.mouseY = ev.clientY;
        },

        touchStart(ev){
            //console.dir(ev.changedTouches[0].pageX + " : " +ev.changedTouches[0].pageY);
            if (ev.target.dataset.tooltip.length > 0){
                this.tooltip.classList.add("mactive");

                this.tooltip.style.top = (ev.changedTouches[0].pageY - 120) + "px";
                if (ev.target.dataset.tooltiplocation=='right'){
                    this.tooltip.style.left = (ev.changedTouches[0].pageX - 220) + "px";
                }else{
                    this.tooltip.style.left = (ev.changedTouches[0].pageX - 50) + "px";
                }
                                
                this.touchStartX = Math.round(ev.changedTouches[0].pageX);
                this.touchStartY = Math.round(ev.changedTouches[0].pageY);
                this.tooltip.textContent = ev.target.dataset.tooltip;
            }
        },
        touchMove(ev){
            //console.log("movien");
            let subX = Math.abs(ev.changedTouches[0].pageX - this.touchStartX);
            let subY = Math.abs(ev.changedTouches[0].pageY - this.touchStartY);
            if (subX > 15 || subY > 15){
                this.tooltip.classList.remove("mactive");
            }
            //this.mouseX = subX;
            //this.mouseY = subY;
            //console.dir(ev);
            //this.mouseX = ev.changedTouches[0].pageX;
            //this.mouseY = ev.changedTouches[0].pageY;
            //console.log(ev.changedTouches[0].pageX+ " : " + ev.changedTouches[0].pageY);
            //console.log(ev.srcElement.className);
            //console.log(ev.clientX + " : "+ev.clientY);
        }
    },
    /*mounted(){
        window.addEventListener('touchmove', this.touchMove);
        window.addEventListener('touchstart', this.touchStart);
    }*/
}
</script>
<style lang="scss" scoped>
@import "../../scss/tooltip.scss";
@import "../../scss/variables.scss";
.dragge{
    border: 3px solid green;
}

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
}
.list-group-item,
.feature-item {
    cursor: pointer;
}
</style>
