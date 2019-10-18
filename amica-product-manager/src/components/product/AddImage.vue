<template>
    <div>
        <h5>Przeciągnij zdjęcia do ramki: </h5>
        <div
            class="drop dashed-background"  
            @dragover.prevent 
            @drop="onDrop"
        >
            <img v-for="(url, key, index) in images" 
                    :key="index"
                    class="product-image"
                    :src="url" />
                <!-- <img class="product-image" :src="url" /> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "addImage",
    props: {
        images:Array
    },
    methods: {
        onDrop(evt){
            evt.stopPropagation();
            evt.preventDefault();
            var imageUrl = evt.dataTransfer.getData("text/html");
             var rex = /src="?([^"\s]+)"?\s*/;
            var url, res;
            url = rex.exec(imageUrl);
            this.$emit('imageadded', url[1]);
        }
    }
};
</script>

<style lang="scss" scoped>
    p {
        text-align: left;
    }
    .drop {
        width: 100%;
        min-height: 60px;
        display: flex;
        flex-flow: row wrap;
        justify-content:center;
        align-items: center;
    }
    
    .product-image{
        height: 80px;
        padding: 0px;
        background-color: white;
        margin: 10px;
        border: 1px solid black;
        border-radius: 5px;
    }
</style>