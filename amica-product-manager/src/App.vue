<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addproduct">Dodaj nowy produkt</router-link> |
      <router-link to="/categories_manager">Zarządzanie kategoriami</router-link>  |
      <router-link to="/features_manager">Zarządzanie funkcjami</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('retrieveCategories');
        this.$store.dispatch('retrieveFeatures');
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.amica-button{
    display: inline-block;
    font-family: 'Lato';
    text-transform: uppercase;
    font-size: 14px;
    color: white;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 12px 22px;
    cursor: pointer;
    background: rgb(227,19,41);
    transition-duration: .3s;
    box-shadow: 0 0 0 0px transparent;
    margin: 1rem;
    //padding: 8px;
    font-weight: 700;
    display: inline-flex;
    justify-content:center;
    align-items: center;
}
</style>
