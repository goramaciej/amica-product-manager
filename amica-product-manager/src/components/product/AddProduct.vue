<template>
    <div class="amicaform">
        <h4>Dodaj nowy produkt:</h4>

        <div class="form-group">
            <input
                type="text"
                id="productName"
                class="form-control"
                placeholder="Wprowadź nazwę produktu"
                v-model="productData.productName"
            />
        </div>
        <select-category />
        <div class="form-group">
            <textarea
                cols="40"
                rows="5"
                type="text"
                id="productDescription"
                class="form-control"
                placeholder="Wprowadź opis produktu"
                v-model="productData.description"
            ></textarea>
        </div>
        <add-image @imageadded="addImage" :images="productData.images" />
        <div class="amica-button">START</div>
    </div>
</template>

<script>
import addImage from "./AddImage.vue";
import SelectCategory from "./SelectCategory.vue";
export default {
    data() {
        return {
            productData: {
                cat: 0,
                subcat: 0,
                product_id: this.randomNumber(),
                productName: "",
                description: "",
                images: []
            }
        };
    },
    components: {
        addImage,
        SelectCategory
    },
    methods: {
        addImage(imageurl) {
            this.productData.images.push(imageurl);
        },
        randomNumber() {
            return Math.floor(Math.random() * 10000);
        }
    }
};
</script>

<style lang="scss">
@import "../../scss/amicaform.scss";
.imagediv {
    display: inline-block;
    margin: 0 10px;
}
.row {
    width: 80%;
}
.images {
    display: block;
    width: 100%;
}
textarea {
    resize: none;
}
</style>