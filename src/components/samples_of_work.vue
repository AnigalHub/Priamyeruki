<template>
    <div id="samples">
        <b-container>
            <h2>Портфолио</h2>
            <div class="flex-container">
                <div v-for="(work, index) in Works" :key="index">
                    <img :src="work.src" :alt="work.alt"/>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "samples_of_work",
        data(){
            return{
                Works:[
                    {
                        src: "./images/portfolio_1.png",
                        alt: "Наручники",
                    },
                    {
                        src: "./images/portfolio_2.png",
                        alt: "Крепеж",
                    },
                    {
                        src: "./images/portfolio_3.png",
                        alt: "Ваза_в_сад",
                    },
                    {
                        src: "./images/portfolio_4.png",
                        alt: "Кронштейн",
                    },
                    {
                        src: "./images/portfolio_5.png",
                        alt: "Замок",
                    },
                    {
                        src: "./images/portfolio_6.jpg",
                        alt: "Вывеска",
                    },
                    {
                        src: "./images/portfolio_7.jpg",
                        alt: "Подарочные_коробки",
                    },
                    {
                        src: "./images/portfolio_8.png",
                        alt: "Коробочка",
                    },
                    {
                        src: "./images/portfolio_9.png",
                        alt: "Подарочная упаковка",
                    },
                    {
                        src: "./images/portfolio_10.png",
                        alt: "Часы",
                    },
                    {
                        src: "./images/portfolio_11.png",
                        alt: "Шкатулка",
                    },
                    {
                        src: "./images/portfolio_12.png",
                        alt: "Коробочки_для камней",
                    },
                    {
                        src: "./images/portfolio_13.jpg",
                        alt: "Таблика_Гостехносервис",
                    },
                    {
                        src: "./images/portfolio_14.jpg",
                        alt: "Светильник",
                    },
                    {
                        src: "./images/portfolio_15.jpg",
                        alt: "Почищенные_ключи",
                    },
                    {
                        src: "./images/portfolio_16.jpg",
                        alt: "Чистый_корпус_лопаты",
                    },
                    {
                        src: "./images/portfolio_17.jpg",
                        alt: "Мотоцикл",
                    },

                ],
            }
        }
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
        width: 22%;
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
        .flex-container > div {
            width: 28%;
        }
    }
    @media screen and (max-width: 768px) {
        .flex-container > div {
            width: 42%;
        }
    }
</style>