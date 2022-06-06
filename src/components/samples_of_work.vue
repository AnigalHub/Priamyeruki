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
                    {src: "images/portfolio/portfolio_1.jpg", alt: "Наручники",},
                    {src: "images/portfolio/portfolio_2.jpg", alt: "Крепеж",},
                    {src: "images/portfolio/portfolio_3.jpg", alt: "Ваза_в_сад",},
                    {src: "images/portfolio/portfolio_4.jpg", alt: "Кронштейн",},
                    {src: "images/portfolio/portfolio_5.jpg", alt: "Замок",},
                    {src: "images/portfolio/portfolio_6.jpg", alt: "Вывеска",},
                    {src: "images/portfolio/portfolio_12.jpg", alt: "Коробочки_для камней",},
                    {src: "images/portfolio/portfolio_8.jpg", alt: "Коробочка",},
                    {src: "images/portfolio/portfolio_7.jpg", alt: "Подарочные_коробки",},
                    {src: "images/portfolio/portfolio_9.jpg", alt: "Подарочная упаковка",},
                    {src: "images/portfolio/portfolio_10.jpg", alt: "Часы",},
                    {src: "images/portfolio/portfolio_11.jpg", alt: "Шкатулка",},
                    {src: "images/portfolio/portfolio_13.jpg", alt: "Таблика_Гостехносервис",},
                    {src: "images/portfolio/portfolio_14.jpg", alt: "Светильник",},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>