<template>
    <div class="addproduct">
        <h1>Dodaj produkt:</h1>

        <div class="row">
            <div>
                <div class="form-group">
                    <input
                        type="text"
                        id="productName"
                        class="form-control"
                        placeholder="Wprowadź nazwę produktu"
                        v-model="productData.productName"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <select-category />
        </div>
        <div class="row">
            <div>
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
            </div>
        </div>
        <div class="row">
            <add-image @imageadded="addImage" :images="productData.images" />
        </div>
    </div>
</template>

<script>
import addImage from './addProductComponents/AddImage.vue';
import SelectCategory from './addProductComponents/SelectCategory.vue';
export default {
    data() {
        return {
            productData: {
                cat: 0,
                subcat: 0,
                product_id: 0,
                productName: "",
                description: "",
                images: []
            },
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
    }
};
</script>

<style lang="scss" scoped>

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
textarea{
    resize: none;
}
</style>