<template>
    <div class="feature">
        <img :src="feature.iconURL" class="feature-icon" alt />
        <img :src="feature.imageURL" class="img-responsive" alt />
        <div class="feature-inner">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "featureItem",
    props: ["feature"]
};
</script>

<style lang="scss" scoped>
@import "../../scss/shared.scss";
@import "../../scss/variables.scss";
.feature {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 360px;
    padding: $bm 30px $bm 0;
    //padding-left: 0;
    //max-height: 500px;
    //overflow: hidden;
    // @media screen and (min-width: 600px) {
    //     flex-basis: 300px;
    //     padding: 40px 30px 0 30px;
    // }
    .feature-icon {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 25%;
        z-index: 10;
        transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.92, 1.3);
    }
    &:hover .feature-icon {
        transform: scale(1.2);
    }
    .img-responsive {
        display: block;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        padding-left: $bm;
    }
    .feature-inner {
        p {
            font-size: 15px;
            text-align: justify;
            line-height: 1.4;
        }
    }
}
</style>