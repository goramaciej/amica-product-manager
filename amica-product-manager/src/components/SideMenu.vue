<template>
    <div>
        <div class="bm-menu" :class="{active: classActive}">
            <nav>
                <!-- <li @click="gotToPage('home')">Strona Główna</li>
                <li @click="gotToPage('products')">Produkty</li>
                <li @click="gotToPage('featuresManager')">Zarządzanie funkcjami</li>-->

                <router-link tag="li" :to="{ name: 'home'}">home</router-link>
                <router-link
                    tag="li"
                    :to="{ name: 'products', params: { category: 'wszystkie' }}"
                >Produkty</router-link>
                <router-link tag="li" :to="{ name: 'addproduct'}">Dodaj nowy produkt</router-link>
                <router-link tag="li" :to="{ name: 'featuresManager'}">Zarządzanie funkcjami</router-link>
            </nav>
            <span class="bm-cross-button cross-style" @click="hideMobileMenu">
                <span
                    class="bm-cross"
                    style="position: absolute; width: 3px; height: 30px; transform: rotate(-45deg);"
                ></span>
                <span
                    class="bm-cross"
                    style="position: absolute; width: 3px; height: 30px; transform: rotate(45deg);"
                ></span>
            </span>
        </div>
        <div class="bm-burger-button" @click="showMobileMenu">
            <div class="bm-burger-bars line-style"></div>
            <div class="bm-burger-bars line-style"></div>
            <div class="bm-burger-bars line-style"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideMenu",
    data() {
        return {
            classActive: false
        };
    },
    computed: {
        scrollY() {
            return document.body.style.top;
        }
    },
    methods: {
        showMobileMenu() {
            this.classActive = true;
            this.$emit("showMobileMenu");
        },
        hideMobileMenu() {
            this.classActive = false;
            this.$emit("hideMobileMenu");
        },
        gotToPage(pageName) {
            this.hideMobileMenu();
            this.$router.push({ name: pageName });
        }
    },
    watch: {
        $route(to, from) {
            if (this.classActive){
                this.hideMobileMenu();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

nav {
    color: white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    li {
        position: relative;
        cursor: pointer;
        list-style-type: none;
        margin: 15px;
        font-family: "Lato";
        text-transform: uppercase;
        font-size: 16px;
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
        &:hover:after,
        &.router-link-exact-active:after,
        &.independent-link:after {
            width: 100%;
            left: 0;
        }
    }
}

.bm-burger-button {
    position: fixed;
    width: 50px;
    height: 40px;
    right: 20px;
    top: 10px;
    cursor: pointer;
    z-index: 1500;
    background-color: $amicared;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    border-radius: 5px;
    @media screen and (min-width: $break-small-menu) {
        display: none;
    }
    .bm-burger-bars {
        background-color: white;
        height: 3px;
        width: 35px;
        margin: 2px auto 4px;
    }
}
.cross-style {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
}
.bm-cross {
    background: white;
}
.bm-cross-button {
    height: 24px;
    width: 24px;
}
.bm-menu {
    height: 100%;
    width: 300px;
    position: fixed;
    right: -300px;
    z-index: 2000;
    top: 0;
    background-color: $amicared;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.4s;
    &.active {
        right: 0;
    }
}

.bm-overlay {
    background: $amicared;
}
</style>
