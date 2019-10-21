<template>
    <div id="app">
        <navbar />
        <div class="top-spacer">A</div>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    created() {
        this.$store.dispatch("retrieveCategories");
        this.$store.dispatch("retrieveFeatures");
    },
    components: {
        Navbar
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
a:hover {
    font-color: yellow !important;
}

.amica-button {
    display: inline-block;
    font-family: "Lato";
    text-transform: uppercase;
    font-size: 14px;
    color: white;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 12px 22px;
    cursor: pointer;
    background: rgb(227, 19, 41);
    transition-duration: 0.2s;
    box-shadow: 0 0 0 0px transparent;
    margin: 1rem;
    //padding: 8px;
    font-weight: 700;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transform: scale(1.1);
    }
    & a:hover {
        color: green;
    }
}
textarea:focus,
input:focus,
input[type]:focus,
.uneditable-input:focus {
    border-color: rgba(227, 19, 41, 0.8);
    box-shadow: 0 1px 1px rgba(227, 19, 41, 0.075) inset,
        0 0 8px rgba(227, 19, 41, 0.6);
    outline: 0 none;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity .5s, transform .5s ease-out;
}
.fade-enter{
    opacity: 0;
    transform: translateY(-30px);
}
.fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
