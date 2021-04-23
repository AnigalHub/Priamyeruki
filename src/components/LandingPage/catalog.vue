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

</style>