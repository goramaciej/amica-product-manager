<template>
    <div id="app">
        <side-menu />
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
import Navbar from './components/Navbar.vue';
import SideMenu from './components/SideMenu.vue';

export default {
  data() {
    return {

    };
  },
  computed: {
    mobileMenuVisible() {
      return this.$store.getters.mobileMenuVisible;
    },
  },
  created() {
    this.$store.dispatch('retrieveCategories');
    this.$store.dispatch('retrieveFeatures');
    this.$store.dispatch('retrieveProducts');
  },
  components: {
    Navbar,
    SideMenu,
  },
  methods: {

  },
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

*,
:before,
:after {
    box-sizing: border-box;
}
</style>
