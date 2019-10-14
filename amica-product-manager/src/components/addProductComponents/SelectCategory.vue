<template>
    <div>
        <select v-model="categoryName" @change="catSelected" class="form-control">
            <option selected disabled>Wybierz kategorię produktu</option>
            <option v-for="(item, key, index) in categories" v-bind:key="index">{{ item.name }}</option>
        </select>
        <select class="form-control">
            <option selected disabled>Wybierz podkategorię</option>
                
        </select>
    </div>
</template>

<script>
export default {
    name: "SelectCategory",
    data() {
        return {
            categoryName: "Wybierz kategorię produktu",
            categories: [
                { name: "Lodówki", id: 1 },
                { name: "Kuchnie", id: 2 },
                { name: "Piekarniki", id: 3 },
                { name: "Zmywarki", id: 4 }
            ]
        };
    },
    methods: {
        catSelected(ev){
            //console.dir(categories.find(ev.target.value));
            let selectedId = this.categories.find(el => el.name == ev.target.value).id;
            console.log(selectedId);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>