<template>
    <div class="hero">
        <section class="hero-inner">
            <h1>Manager produktów Amica</h1>
            <p>Witam w aplikacji mającej na celu zarządzanie produktami w bazie. Jest to funkcjonalnie uproszczona wersja aplikacji tworzonej dla innego klienta, w której przygotowaniu brałem udział. Wprowadziłem w niej pewne usprawnienia mające na celu szybsze i bardziej intuicyjne <router-link to="/addproduct">dodawanie kolejnych produktów</router-link> z dużą ilością <router-link to="/features-manager">funkcji</router-link>.</p>
            <p>Aplikacja została zrealizowana jako Single Page Application z wykorzystaniem frameworka Vue. Ze względu na jej przeznaczenie została zaprojektowana głównie na potrzeby "desktop", jednak używanie jej na urządzeniu mobilnym pozwala na wykorzystanie jej pełnej funkcjonalności. Za routing odpowiada vuex, wykorzystałem też bibliotekę axios do komunikacji z bazą danych i vuex do globalnego zarządzania stanem.</p>
            <p>Od strony wizualnej całość jest mojego autorstwa i niewątpliwie wymagałaby ingerencji bardziej doświadczonego grafika / projektanta UI. Style zostały stworzone w formacie SCSS, celowo nie korzystałem z żadnego frameworka CSS z wyjątkiem bootstrap do pomocy w ostylowaniu elementów formularzy.</p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
    .hero{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: calc(100vh - 60px);
        overflow: hidden;
        color: rgb(83, 83, 83);

        background-image: url('../images/desktop.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        .hero-inner{
            width: 80%;
            background: rgba(255, 255, 255, 0.8);
            padding: $bm;

            h1{
                font-size: calc(16px + 1vw);
                margin-top: 0;
            }
            p{
                font-size: 12px;
                text-align: justify;
                line-height: 1.4;
                @media screen and (min-width: $break-small){
                    font-size: 14px;
                }
                @media screen and (min-width: $break-xlarge){
                    font-size: 16px;
                    line-height: 1.5;
                }
            }
            a {
                color: $amicared;
            }
        }
    }
</style>
