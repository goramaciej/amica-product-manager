<template>
    <div class="hero">
        <div class="hero-inner">
            <h1>My awesome website</h1>
            <h2>Look at this website and bask in its amazing glory!</h2>
            <a href="https://example.com/" class="btn">Go ahead...</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style lang="scss" scoped>
    .hero{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: calc(100vh - 60px);
        overflow: hidden;
        h1{
            font-size: 10vw;
        }
        h2{
            font-size: 6vw;
        }
        background-image: url('../images/desktop.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>