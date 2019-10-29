<template>
    <div id="app">
        <side-menu @hideMobileMenu="mobOff" @showMobileMenu="mobOn"/>
        <main id="page-wrap">
            <navbar />
            <div class="top-spacer">A</div>
            <div class="page-container" :class="{blured: mobileMenuVisible}">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
//import { Reveal } from "vue-burger-menu";
import SideMenu from "./components/SideMenu.vue";
export default {
    data(){
        return {
            mobileMenuVisible: false,
        }
    },
    created() {
        this.$store.dispatch("retrieveCategories");
        this.$store.dispatch("retrieveFeatures");
        this.$store.dispatch("retrieveProducts");
    },
    components: {
        Navbar,
        //Reveal
        SideMenu
    },
    methods: {
        mobOff(){
            this.mobileMenuVisible = false;
        },
        mobOn(){
            this.mobileMenuVisible = true;
        }

    }
};
</script>

<style lang="scss">
@import "./scss/amicaform.scss";
#app {
    font-family: "Lato", Helvetica, Arial, sans-serif;
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
.page-container {
    &.blured {
        -webkit-filter: blur(2px);
        -moz-filter: blur(2px);
        -o-filter: blur(2px);
        -ms-filter: blur(2px);
        filter: blur(2px);
        pointer-events: none;
    }
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s, transform 0.5s ease-out;
}
.fade-enter {
    opacity: 0;
    transform: translateY(-30px);
}
.fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
