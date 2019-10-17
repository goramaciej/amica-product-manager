<template>    
    <div>
        <select v-model="categoryName" @change="catSelected" class="form-control">
            <option selected disabled>Wybierz kategorię produktu</option>
            <option v-for="(item, key, index) in categories" v-bind:key="index">{{ item.name }}</option>
        </select>
        <select id="subcategorySelector" 
                class="form-control" 
                @change="subcatSelected" 
                :disabled="subcategoryDisabled"
                ref="subcategorySelector">
            <option selected disabled> {{ subcategoriesDisabledText}} </option>
            <option v-for="(item, key, index) in subCategories" v-bind:key="index">{{ item.name }}</option>
        </select>
    </div>
</template>

<script>

export default {
    name: "SelectCategory",
    data() {
        return {
            categoryName: "Wybierz kategorię produktu",
            selectedCategory: 0,
            subcategoriesDisabledText: "Najpierw wybierz kategorię produktu",
            subcategoryDisabled: true,
            subCategories: null,
        };
    },
    computed: {
        categories(){
            return this.$store.getters.categories;
        },
        
    },
    methods: {
        catSelected(ev){
            //console.dir(categories.find(ev.target.value));
            this.selectedCategory = this.categories.find(el => el.name == ev.target.value).id;
            this.setSubcategories(this.subCategories = this.categories.find(el => el.name == ev.target.value).subcats);
        },
        
        setSubcategories(subcatsArray){
            this.$refs.subcategorySelector.selectedIndex = 0;
            if (subcatsArray.length > 0){
                this.subCategories = subcatsArray;
                this.subcategoryDisabled = false;
                this.subcategoriesDisabledText = "Wybierz podkategorię produktu";
            }else{
                this.subcategoryDisabled = true;
                this.subcategoriesDisabledText = "Wybrana kategoria nie ma podkategorii";
            }
        },
        subcatSelected(ev){
            console.log("subcat selected");
        },
        addData(){
            
            //console.log(this.$store.getters.categories);
            /*axios.post('/categories.json', this.$store.getters.categories)
                .then( res => console.log(res))
                .catch( error => console.log(error));*/
            
        },
        retrieveData(){
            console.log(this.$store.getters.categories);
            /*axios.get('/categories.json')
                .then( response => {
                    let arr = Object.values(response.data)[0];
                    console.dir(arr);
                })
                .catch( error => console.log(error));*/
        },
    }
};
</script>