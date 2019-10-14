<template>
    <div>
        <p>Przeciągnij zdjęcia do ramki: </p>
        <div
            id="drop"
            class="layout-column twelve"            
            @dragover.prevent 
            @drop="onDrop"
        >
            <div v-for="(url, key, index) in images" :key="index">
                <img class="product-image" :src="url" />
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
        ///var dropbox = document.getElementById('drop');
        //dropbox.addEventListener('drop', drop, false);
        onDrop(evt){
            evt.stopPropagation();
            evt.preventDefault();
            var imageUrl = evt.dataTransfer.getData("text/html");
             var rex = /src="?([^"\s]+)"?\s*/;
            var url, res;
            url = rex.exec(imageUrl);
            this.$emit('imageadded', url[1]);
        }
        /*drop(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            var imageUrl = evt.dataTransfer.getData("text/html");

            var rex = /src="?([^"\s]+)"?\s;
            var url, res;

            url = rex.exec(imageUrl);
            alert(url[1]);
        }*/
    }
};
</script>

<style lang="scss" scoped>
    p {
        text-align: left;
    }
    #drop {
        border: 3px dashed black;
        background-color: #f0efef;
        width: 100%;
        min-height: 60px;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 5px;
    }
    .product-image{
        height: 80px;
        padding: 10px;
        background-color: white;
        margin: 10px;
        border: 1px solid black;
        border-radius: 5px;
    }
</style>