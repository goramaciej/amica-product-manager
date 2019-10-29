<template>
    <div class="feature">
        <img :src="feature.iconURL" class="feature-icon" alt />
        <img :src="feature.imageURL" class="img-responsive" alt />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <!-- <div class="mcover"></div> -->
    </div>
</template>

<script>
export default {
    name: "featureComponent",
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
    padding: $bm;
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
    &:hover .feature-icon{
        transform: scale(1.2);
    }
   

    .mcover{
        width: 100%;
        border: 1px solid red;
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
        height: 80px;
        position: absolute;
        bottom: 0px;
    }
    p{
        font-size: 15px;
        text-align: justify;
        line-height: 1.4;
    }
}
// .feature:empty {
//   height: 0;
//   border: none;
// }

// *,
// :before,
// :after {
//   box-sizing: border-box;
// }

img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.img-responsive {
    //margin: 0 auto;
    display: block;
    max-width: 100%;
    height: auto;
}

.feature p {
    text-align: justify;
}
.row-centered {
    text-align: center;
}

</style>