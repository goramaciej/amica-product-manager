<template>
    <div>
        <select v-model="categoryName" @change="catSelected" class="form-control">
            <option selected disabled>Wybierz kategorię produktu</option>
            <option v-for="(item, key, index) in categories" v-bind:key="index">{{ item.name }}</option>
        </select>
        <select
            id="subcategorySelector"
            class="form-control"
            @change="subcatSelected"
            :disabled="subcategoryDisabled"
            ref="subcategorySelector"
        >
            <option selected disabled>{{ subcategoriesDisabledText}}</option>
            <option v-for="(item, key, index) in subCategories" v-bind:key="index">{{ item.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "categoriesSelector",
    data() {
        return {
            categoryName: "Wybierz kategorię produktu",
            selectedCategory: 0,
            selectedSubcategory: 0,
            subcategoriesDisabledText: "Najpierw wybierz kategorię produktu",
            subcategoryDisabled: true,
            subCategories: null
        };
    },
    computed: {
        categories() {
            return this.$store.getters.categories;
        }
    },
    methods: {
        catSelected(ev) {
            this.selectedCategory = this.categories.find(
                el => el.name == ev.target.value
            ).id;
            this.setSubcategories(
                (this.subCategories = this.categories.find(
                    el => el.name == ev.target.value
                ).subcats)
            );
            this.$emit("change", this.selectedCategory);
        },

        setSubcategories(subcatsArray) {
            this.$refs.subcategorySelector.selectedIndex = 0;
            if (subcatsArray && subcatsArray.length > 0) {
                this.subCategories = subcatsArray;
                this.subcategoryDisabled = false;
                this.subcategoriesDisabledText =
                    "Wybierz podkategorię produktu";
            } else {
                this.subcategoryDisabled = true;
                this.subcategoriesDisabledText =
                    "Wybrana kategoria nie ma podkategorii";
            }
        },
        subcatSelected(ev) {
            this.selectedSubcategory = this.subCategories.find(
                el => el.name == ev.target.value
            ).id;
            this.$emit(
                "change",
                this.selectedCategory,
                this.selectedSubcategory
            );
        }
    }
};
</script>
