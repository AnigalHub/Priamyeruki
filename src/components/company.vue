<template>
    <div id="company">
        <b-container>
            <h2>О компании</h2>
            <b-row class="important_row">
                <b-col cols="6">
                    <img src="../../public/images/сompany.jpg" alt="цех_компании_Аваконт"/>
                </b-col>
                <b-col>
                    <p class="text">
                        <b>ООО «Аваконт»</b> - производственная компания, занимающаяся
                        всеми видами работ по изготовлению разнообразного декора, рекламных
                        вывесок, сувенирной продукции, реставрацией и брендированием изделий.
                    </p>
                    <p class="text">
                            Компания ООО «Аваконт» была основана <u> 18 февраля 2019 года.</u>
                    </p>
                    <p class="text">
                        За это время мы качественно выполнили более <b>1500</b> заказов,
                        <b>40%</b> заказов - это повторные заказы наших Клиентов, а также обращения
                        по их рекомендациям. Наши цены - одни из самых  доступных в Москве и Московской области.
                    </p>
                    <p class=" text">
                        К каждому клиенту у нас исключительно
                        индивидуальный подход.
                    </p>
                    <p class="text">
                        Обращаясь к нам, Вы получаете выполнение вашего заказа в кратчайшие сроки и высокое качество производимых работ!
                    </p>
                </b-col>
            </b-row>
            <p class="text">
                <u><b>Целью нашей компании</b></u>  является качественное предоставление вашей продукции на рынке,
                восстановление функциональности товаров, популяризация торговой марки вашего
                предприятия, привлечение внимания потребителей с помощью мощностей нашего производства.
            </p>
            <b-row class="important_row">
                <b-col class="general_col">
                    <h5>Этапы работы с клиентом:</h5>
                        <div class="flex-container" >
                            <div  v-for="step in StepsCompany" :key="step.name_step">
                                    <component :is="step.svg"/>
                                    <h6>{{step.name_step}}</h6>
                            </div>
                        </div>
                </b-col>
                <b-col cols="5">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OySR7Vtr9zM"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import TelephoneSVG from '../components/company_svg/telephone_svg';
    import ModelSVG from '../components/company_svg/model_svg';
    import CalculationSVG from'../components/company_svg/calculation_svg';
    import ContractSVG from '../components/company_svg/contract_svg';
    import ProductionSVG from '../components/company_svg/production_svg';
    export default {
        components: {TelephoneSVG, ModelSVG,CalculationSVG,ContractSVG,ProductionSVG},
        name: "company",
        data() {
            return {
                StepsCompany: [
                    {
                        svg: 'TelephoneSVG',
                        name_step: 'Звоните или оставляете заявку',

                    },
                    {
                        svg: 'ModelSVG',
                        name_step: 'Согласовываем макет проекта',

                    },
                    {
                        svg: 'CalculationSVG',
                        name_step: 'Производим рассчет по Вашему заказу',

                    },
                    {
                        svg: 'ContractSVG',
                        name_step: 'Подписываем договор',

                    }, {
                        svg: 'ProductionSVG',
                        name_step: 'Запускаем проект в производство',

                    },
                ],
            }
        }
    }
</script>
<style scoped lang="scss">

    .flex-container div:hover svg{
        animation: bounce-out 1.2s;
    }
    h5{
        text-align: center !important;
    }
    h5,h6{
       padding-top: 2%;
       cursor: default;
    }
    .col-6{
        padding: 0 !important;
    }
    .col-5{
        padding: 15px !important;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }

    .flex-container > div {
        width: 18%;
        margin: 0 0.5% 1% 0.5% !important;
    }
    .general_col{
        padding: 0 !important;
    }
   .col-6{
       margin-bottom: 2%;
   }
    svg{
        width: 100px;
        height: 92px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width: 500px) {
            .col-5{
                margin-left: auto;
                margin-right: auto;
            }
            svg{
                width: 50px;
                height: 50px;
            }
            .flex-container > div {
                width: 31.2%;
                margin-bottom: 0 !important;
            }
            .flex-container > div:nth-child(4){
                margin-left: 15% !important;
            }

    }
    @media screen and (min-width: 500px)and (max-width: 768px) {

            .col-5{
                margin-left: auto;
                margin-right: auto;
            }
            svg{
                width: 75px;
                height: 75px;
            }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {

            .col-5{
                margin-left: auto;
                margin-right: auto;
            }
            svg{
                width: 75px;
                height: 75px;
            }

    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        svg{
            width: 75px;
            height: 75px;
        }
    }

</style>