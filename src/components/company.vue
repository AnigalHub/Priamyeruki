<template>
    <div id="company">
        <b-container>
            <h2>О компании</h2>
            <p class="text"><b>ООО «Аваконт»</b> - производственная компания, занимающаяся всеми видами работ по изготовлению разнообразного декора, рекламных вывесок, сувенирной продукции, реставрацией и брендированием изделий.</p>
            <img src="../../public/images/company/company.jpg" alt="о_компании">
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
                    {descr:'Компания ООО «Аваконт» была основана <u> 18 февраля 2019 года.</u>',},
                    {descr:'  За это время мы качественно выполнили более <b>1500</b> заказов,<b>40%</b> заказов - это повторные заказы наших Клиентов, а также обращения по их рекомендациям. Наши цены - одни из самых  доступных в Москве и Московской области.',},
                    {descr:'В своей работе мы придерживаемся особого подхода к каждому клиенту. Задачи, поставленные заказчиком, решаются исходя из личных пожеланий Клиента.',},
                    {descr:'Обращаясь к нам, Вы получаете выполнение Вашего заказа в кратчайшие сроки и высокое качество производимых работ!',},
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

</style>