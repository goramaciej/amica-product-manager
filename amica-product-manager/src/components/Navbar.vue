<template>
    <header :class="{ 'header--hidden': !showNavbar }">
        <img src="../images/amica-logo.png" alt="logo-amica" />
        <nav>
            <router-link tag="li" :class="{'independent-link': productsInRouter}" to="/products">Produkty</router-link>
            <router-link tag="li" to="/products/addproduct">Dodaj nowy produkt</router-link>
            <!-- <router-link tag="li" to="/categories_manager">Zarządzanie kategoriami</router-link> -->
            <router-link tag="li" to="/features-manager" 
            :class="{'independent-link': featuresInRouter}">Zarządzanie funkcjami</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
            headerHeight: 80,
            productsInRouter: false,
            featuresInRouter: false
        };
    },
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return;
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar =
                currentScrollPosition < this.lastScrollPosition ||
                currentScrollPosition < this.headerHeight;
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition;
        },
        checkRouter(){
            this.productsInRouter = this.$route.path.includes('products') && !this.$route.path.includes('addproduct');
            this.featuresInRouter = this.$route.path.includes('features');
        }

    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
        this.checkRouter();
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    watch: {
        '$route' (to, from) {
            this.checkRouter();
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
header {
    height: 60px;
    width: 100%;
    background: $amicared;
    position: fixed;
    box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
    transform: translate3d(0, 0, 0);
    transition: 0.4s all ease-out;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
header.header--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}
nav {
    color: white;
    li {
        display: inline-block;
        position: relative;
        cursor: pointer;
        list-style-type: none;
        margin: 15px;
        font-family: "Lato";
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;

        &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 1px;
            left: 50%;
            position: absolute;
            background: #fff;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }
        &:hover:after, &.router-link-exact-active:after, &.independent-link:after { 
            width: 100%; 
            left: 0; 
        }
    }
}
</style>