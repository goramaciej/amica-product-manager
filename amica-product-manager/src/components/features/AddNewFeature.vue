<template>
    <div class="addfeature">
        <h4>Dodaj nową funkcję:</h4>
        <div class="form-group">
            <input
                type="text"
                id="featureName"
                class="form-control"
                placeholder="Wprowadź nazwę funkcji"
                v-model="feature.title"
            />
        </div>
        <div class="form-group">
            <textarea
                cols="40"
                rows="5"
                type="text"
                id="featureDescription"
                class="form-control"
                placeholder="Wprowadź opis funkcji"
                v-model="feature.description"
            ></textarea>
        </div>
        <h5>Przeciągnij z innego okna zdjęcie obrazujące funkcję oraz jej ikonę:</h5>
        <div class="imagePlaceholders">            
            <div id="drop2" class="drop" @dragover.prevent @drop="imageDrop">
                <img class="product-image" :src="feature.imageURL" />
            </div>
            <div id="drop1" class="drop" @dragover.prevent @drop="iconDrop">
                <img class="product-image" :src="feature.iconURL" />
            </div>
            <!-- <div v-for="(url, key, index) in images" :key="index">
                <img class="product-image" :src="url" />
            </div>-->
        </div>

        <div id="buttons">
            <div class="amica-button" @click="submitFeature">zapisz i wyjdź</div>
            <div class="amica-button" @click="submitAndClear">zapisz i wyczyść</div>
            <div class="amica-button" @click="clear">wyczyść</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "addNewFeature",
    data() {
        return {
            feature: {
                id: Math.floor(Math.random() * 100000),
                iconURL: "",
                imageURL: "",
                title: "",
                description: ""
            }
        };
    },
    methods: {
        iconDrop(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            const imageUrl = evt.dataTransfer.getData("text/html");
            const rex = /src="?([^"\s]+)"?\s*/;
            this.feature.iconURL = rex.exec(imageUrl)[1];
        },
        imageDrop(evt){
            evt.stopPropagation();
            evt.preventDefault();
            const imageUrl = evt.dataTransfer.getData("text/html");
            const rex = /src="?([^"\s]+)"?\s*/;
            this.feature.imageURL = rex.exec(imageUrl)[1];
        },
        
        submitFeature(){
            const featureToSave = JSON.parse(JSON.stringify(this.feature));
            this.$store.dispatch('addFeature', featureToSave);
            //this.$store.dispatch('sendFeatures');
            this.$router.push('/features_manager')
        },
        submitAndClear(){
            const featureToSave = JSON.parse(JSON.stringify(this.feature));
            this.$store.dispatch('addFeature', featureToSave);
            //this.$router.push('/features_manager');
            this.clear();
        },
        clear(){
            this.feature.id = Math.floor(Math.random() * 100000);
            this.feature.iconURL = "";
            this.feature.imageURL = "";
            this.feature.title = "";
            this.feature.description = "";
        }
    }
};
</script>

<style lang="scss" scoped>
$break-small: 520px;
$break-big: 850px;
.addfeature {
    margin: 0 20px;
    max-width: 800px;
    @media screen and (min-width: $break-small) {
        margin: 0 35px;
    }
    @media screen and (min-width: $break-big) {
        margin: 0 auto;
    }
}
textarea {
    resize: none;
}
textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border-color: rgba(227, 19, 41, 0.8);
    box-shadow: 0 1px 1px rgba(227, 19, 41, 0.075) inset, 0 0 8px rgba(227, 19, 41, 0.6);
    outline: 0 none;
}

.imagePlaceholders{
    text-align: center;
    @media screen and (min-width: $break-small) {
        text-align: left;
    }
}

.drop {
    display: block;
    vertical-align: top;
    border: 1px dashed rgb(110, 110, 110);
    background-color: #dfdede;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;
    @media screen and (min-width: $break-small) {
        display: inline-block;
    }
}
#drop1 {
    margin-top: 2rem;
    width: 105px;
    height: 105px;
    @media screen and (min-width: $break-small) {
        margin-top: 0;
        margin-left: 2rem;
    }
}
#drop2 {
    width: 100%;
    max-width: 320px;
    height: 218px;
}
img {
    object-fit: cover;
}
h4, h5{
    text-align: left;
}
#buttons{
    margin-top: 2rem;
    text-align: right;
}
.amica-button {
    vertical-align: top;
    text-align: center;
    display:block;
    width: 100%;
    margin: 1.5rem 0 0 0;
    @media screen and (min-width: $break-small) {
        display: inline-block;
        width: 30%;
        max-width: 210px;
        margin: 1.5rem 0 0 1.5rem;
        //margin: 1rem;
    }
}

</style>