<template>
    <div id="company">
        <b-container>
            <h2>О компании</h2>
            <p class="text"><b>ООО «Аваконт»</b> - производственная компания, занимающаяся всеми видами работ по изготовлению разнообразного декора, рекламных вывесок, сувенирной продукции, реставрацией и брендированием изделий.</p>
            <img src="../../public/images/company/company.png" alt="о_компании">
            <p v-for="(paragraph,index) in AboutCompany" :key="index" class="text" v-html="paragraph.descr"></p>
            <p class="text clear"><u><b>Целью нашей компании</b></u>  является качественное предоставление вашей продукции на рынке, восстановление функциональности товаров, популяризация торговой марки вашего предприятия, привлечение внимания потребителей с помощью мощностей нашего производства.</p>
            <div class="general_col">
                <h5>Этапы работы с клиентом:</h5>
                <div class="flex-container" >
                    <div  v-for="step in StepsCompany" :key="step.name_step">
                        <component :is="step.svg"/>
                        <h6>{{step.name_step}}</h6>
                    </div>
                </div>
            </div>
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
        components: { TelephoneSVG, ModelSVG,CalculationSVG,ContractSVG,ProductionSVG},
        name: "company",
        data() {
            return {
                AboutCompany:[
                    {
                        descr:'Компания ООО «Аваконт» была основана <u> 18 февраля 2019 года.</u>',
                    },
                    {
                        descr:'  За это время мы качественно выполнили более <b>1500</b> заказов,\n' +
                            '<b>40%</b> заказов - это повторные заказы наших Клиентов, а также обращения\n' +
                            'по их рекомендациям. Наши цены - одни из самых  доступных в Москве и Московской области.',
                    },
                    {
                        descr:'В своей работе мы придерживаемся особого подхода к каждому клиенту. Задачи, поставленные заказчиком, решаются исходя из личных пожеланий Клиента.',
                    },
                    {
                        descr:'Обращаясь к нам, Вы получаете выполнение Вашего заказа в кратчайшие сроки и высокое качество производимых работ!',
                    },
                ],
                StepsCompany: [
                    {svg: 'TelephoneSVG', name_step: 'Звоните или оставляете заявку',},
                    {svg: 'ModelSVG', name_step: 'Согласовываем макет проекта',},
                    {svg: 'CalculationSVG', name_step: 'Производим расчет по Вашему заказу',},
                    {svg: 'ContractSVG', name_step: 'Подписываем договор',},
                    {svg: 'ProductionSVG', name_step: 'Запускаем проект в производство',},
                ],
            }
        }
    }
</script>
<style scoped lang="scss">
    .row:hover svg,
    .flex-container div:hover svg{
        animation: bounce-out 1.2s;
    }
    h5{
        text-align: center !important;
    }
    h5,h6{
        cursor: default;
    }
    img{
        width: 45%;
        float: left;
        margin: 0 2% 1% 0;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        width: 18%;
        margin: 0 0.5% 1% 0.5% !important;
    }
    svg{
        width: 120px;
        height: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width: 500px) {
        img{
            width: 70%;
            float: none;
        }
        p{
            margin-bottom: .25rem !important;
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
        img{
            width: 50%;
        }
        svg{
            width: 75px;
            height: 75px;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        svg{
            width: 85px;
            height: 85px;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        svg{
            width: 95px;
            height: 95px;
        }
    }
    @media screen and (max-width: 1600px) and (min-height: 992px){
        svg{
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 1.5% !important;
        }
        .flex-container > div {
            width: 31.2%;
            margin-bottom: 5% !important;
        }
        .flex-container > div:nth-child(4){
            margin-left: 15% !important;
        }
    }
</style>