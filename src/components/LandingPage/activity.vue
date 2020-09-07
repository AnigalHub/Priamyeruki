<template>
    <div id="activity">
        <b-container>
            <h2>Направления деятельности</h2>
            <div class="flex-container">
                <div>
                    <router-link to="../processing_on_a_cnc_milling_machine">
                        <img src="../../../public/images/1.jpg"/>
                        <h5>Обработка дерева, металла и пластика на фрезерном станке ЧПУ</h5>
                    </router-link>
               </div>
               <div>
                    <router-link to="../design_and_modeling">
                        <img src="../../../public/images/2.jpg"/>
                        <h5>Проектирование и моделирование</h5>
                    </router-link>
               </div>
               <div>
                    <router-link to="../chrome_plating">
                        <img src="../../../public/images/3.jpg"/>
                        <h5>Химическая металлизация (хромирование)</h5>
                    </router-link>
               </div>
               <div>
                   <router-link to="../aquaprint">
                       <img src="../../../public/images/4.jpg"/>
                       <h5>Аквапринт (иммерсионная печать)</h5>
                   </router-link>
               </div>
                <div>
                    <router-link to="../sandblasing">
                        <img src="../../../public/images/6.jpg"/>
                        <h5>Пескоструйная обработка</h5>
                    </router-link>
                </div>
                <div>
                    <router-link to="../laser_engraving">
                        <img src="../../../public/images/5.jpg"/>
                        <h5>Лазерная гравировка деревянных и пластиковых поверхностей</h5>
                    </router-link>
                </div>
                <div>
                    <router-link to="../painting_works">
                        <img src="../../../public/images/7.jpg"/>
                        <h5>Малярно-покрасочные работы</h5>
                    </router-link>
                </div>
                <div>
                    <router-link to="../drawing_with_a_UV_printer">
                        <img src="../../../public/images/8.jpg"/>
                        <h5>Нанесение графики на любые плоские поверхности</h5>
                    </router-link>
                </div>
                <div></div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "activity"
    }
</script>

<style scoped lang="scss">
    h2{
        text-align: center !important;
    }
    img{
       filter: brightness(80%);
        box-shadow: none !important;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        background: radial-gradient(70% 70%, #ffffff, rgb(196, 192, 197));
        width: 31.2%;
        margin: 0 1% 2% 1% !important;
        box-shadow: 5px 5px 5px #696969;
    }
    .flex-container > div:hover {
        box-shadow:  0 0 9px  7px #1A394B;
        h5{
            background: white;
        }
        img{
            filter: brightness(100%) contrast(130%);
        }
        img,h5,div{
            animation: bounce-in .4s;
        }
    }
    .flex-container > div:last-child {
        background: none;
        box-shadow: none;
    }
    h5{
        height: 60px;
        padding: 0 0.5%;
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
        h5 {
            margin-top: 5% !important;
        }
    }
    @media screen and (max-width: 550px) {
        .flex-container > div {
            width: 100%;
            margin: 0 1.5% 5% 1.5% !important;
            box-shadow: 5px 5px 5px #8a8a8a;
        }
        img{
            height: 80px !important;
            width: 30% !important;
            float: left;
        }
        h5 {
            height: 45px;
            display: flex;
            margin-top: 3%;
            border: none !important;
            background: none !important;
        }
        .flex-container > div:hover {
            h5{
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
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        h5{
            height: 90px;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        h5{
            height: 70px;
        }
    }
    @media screen and (max-width: 350px) {
        h5 {
            margin-top: 5% !important;
        }
    }

</style>