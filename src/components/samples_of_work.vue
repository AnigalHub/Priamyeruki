<template>
    <div id="samples">
        <b-container>
            <h2>Портфолио</h2>
            <div class="flex-container">
                <div>
                    <img src="../../public/images/portfolio_9.png"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_1.jpg"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_3.png"/>
                </div>
                <div>
                   <img src="../../public/images/portfolio_6.png"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_2.png"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_4.jpg"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_7.jpg"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_5.jpg"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_10.jpg"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_8.png"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_7.png"/>
                </div>
                <div>
                    <img src="../../public/images/portfolio_11.png"/>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "samples_of_work"
    }
</script>

<style scoped lang="scss">
    h2{
        padding-left: 15px;
    }
    .row{
        padding-bottom: 30px !important;
    }
    img{
        filter: contrast(120%);
        box-shadow: 3px 3px 3px #696969;
    }
    img:hover{
        box-shadow: 6px 6px 6px #1A394B;
        filter: contrast(150%);
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        background: radial-gradient(70% 70%, #ffffff, rgb(210, 206, 211));
        width: 28%;
        margin: 0 1.5% 2.2% 1.5% !important;
    }
    @media screen and (max-width: 768px) {
        .flex-container {
            margin: 0 2.5%;
        }
        .flex-container > div {
            margin: 0 2.5% 3.2% 2.5% !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .flex-container > div {
            margin: 0 2% 3.8% 2% !important;
        }
    }
    @media screen and (max-width: 992px) {
        .flex-container > div {
            width: 42%;
        }
    }
</style>