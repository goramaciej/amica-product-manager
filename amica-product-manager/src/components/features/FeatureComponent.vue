<template>
    <div class="feature">
        <img :src="feature.iconURL" class="feature-icon" alt />
        <img :src="feature.imageURL" class="img-responsive" alt />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
    </div>
</template>

<script>
export default {
    name: "featureComponent",
    props: ["feature"]
};
</script>

<style lang="scss" scoped>
.feature {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 15px 0 15px;
    margin: 0 0 20px 0;
    max-width: 360px;
    @media screen and (min-width: 320px) {
        flex: 1 0 320px;
    }
    @media screen and (min-width: 600px) {
        flex-basis: 220px;
        padding: 40px 40px 0 25px;
    }
}
.feature-icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 25%;
    height: auto;
}
img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.img-responsive {
    margin: 0 auto;
    display: block;
    max-width: 100%;
    height: auto;
}
h3 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 10px;
    line-height: 1.1;
    text-align: center;
}
.feature p {
    text-align: justify;
}
.row-centered {
    text-align: center;
}
.row {
    //margin-left: -10px;
    //margin-right: -10px;
}
</style>