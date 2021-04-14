<template>
    <div id="activity">
        <b-container>
            <h2>Направления деятельности</h2>
            <div class="flex-container">
                <div v-for="(catalog, index) in calalog" :key="index">
                    <router-link :to="catalog.link">
                        <img :src="catalog.src" :alt="catalog.alt" rel="preload"/>
                        <h3>{{catalog.descr}}</h3>
                    </router-link>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "catalog",
        data(){
            return{
                calalog:[
                    {
                        link: "../processing_on_a_cnc_milling_machine",
                        src: "./images/activity/processing.jpg",
                        descr: "Обработка дерева, металла и пластика на фрезерном станке ЧПУ",
                        alt: "Обработка_дерева,_металла_и_пластика_на_фрезерном_станке_ЧПУ",
                    },
                    {
                        link: "../design_and_modeling",
                        src: "./images/activity/modelling.jpg",
                        alt: "Проектирование_и_моделирование",
                        descr: "Проектирование и моделирование",
                    },
                    {
                        link: "../laser_engraving",
                        src: "./images/activity/laser.jpg",
                        alt: "Лазерная_гравировка",
                        descr: "Лазерная гравировка деревянных и пластиковых поверхностей",
                    },
                    {
                        link: "../sandblasing",
                        src: "./images/activity/sandblasing.jpg",
                        alt: "Пескоструйная_обработка",
                        descr: "Пескоструйная обработка",
                    },
                    {
                        link: "../painting_works",
                        src: "./images/activity/painting.jpg",
                        alt: "Малярно-покрасочные_работы",
                        descr: "Малярно-покрасочные работы",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    h2{
        text-align: center !important;
    }
    img{
      filter: brightness(80%);
      width: 100%;
      height: auto;
      box-shadow: none !important;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        background: radial-gradient(70% 70%, #ffffff, rgb(196, 192, 197));
        width: 31.7%;
        margin: 0 .8% 1.6% .8% !important;
        box-shadow: 5px 5px 5px #696969;
        cursor: pointer !important;

        &:nth-child(4){
            margin-left: 15% !important;
        }
    }
    .flex-container > div:hover {
        box-shadow:  0 0 9px  7px #1A394B;
        h3{
            background: white;
        }
        img{
            filter: brightness(100%) contrast(130%);
        }
        img,h3,div{
            animation: bounce-in .4s;
        }
    }

    h3{
        font-size: 1.4rem;
        cursor: pointer !important;
        height: 90px;
        padding: 0 0.25%;
        margin-bottom: 0 !important;
        background: radial-gradient(70% 70%, #ffffff, rgb(210, 206, 211));
        text-shadow: 1.2px 1.2px 1.2px rgba(255, 255, 255, 0.74);
        display: flex;
        text-align: center !important;
        align-items: center;
        justify-content: center;
        color: #152534;
    }

    @media screen and (max-width: 350px) {
        h3 {
            margin-top: 5% !important;
        }
    }
    @media screen and (max-width: 550px) {
        .flex-container > div {
            width: 100%;
            margin: 0 1.5% 5% 1.5% !important;
            box-shadow: 5px 5px 5px #8a8a8a;

            &:nth-child(4){
                margin: 0 1.5% 5% 1.5% !important;
            }
        }
        img{
            height: 80px !important;
            width: 30% !important;
            float: left;
        }
        h3 {
            height: 45px;
            display: flex;
            margin-top: 3%;
            border: none !important;
            background: none !important;
        }
        .flex-container > div:hover {
            h3{
                background: none;
            }
        }
    }
    @media screen and (min-width: 550px)and (max-width: 768px) {
        .flex-container > div {
            background-color: white;
            width: 46%;
            margin: 0 1.5% 2.5% 1.5% !important;
            box-shadow: 5px 5px 5px #8a8a8a;

            &:nth-child(4){
                margin: 0 1.5% 2.5% 1.5% !important;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        h3{
            height: 95px;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        h3{
            height: 70px;
        }
    }
    @media screen and (max-width: 350px) {
        h3 {
            margin-top: 5% !important;
        }
    }

</style>