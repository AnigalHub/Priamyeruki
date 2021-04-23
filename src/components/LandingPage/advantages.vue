<template>
    <div id="advantages">
        <div id="background">
            <b-container>
                <b-row v-for="advantages in RowAdvantages" :key="advantages.name_advantages">
                    <b-col class="possibility" v-for="(value, index) in advantages.Advantages" :key="index">
                        <component :is="value.svg"/>
                        <h4>{{value.name_advantages}}</h4>
                        <p class="text_light">{{value.descr_advantages}}</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import DeliverySVG from '../LandingPage/advantages_svg/delivery_svg';
    import DiscountSVG from '../LandingPage/advantages_svg/discount_svg';
    import LocalProductionSVG from '../LandingPage/advantages_svg/local_production_svg';
    import PricePolicySVG from '../LandingPage/advantages_svg/price_policy_svg';
    import ProfessionalAdviceSVG from '../LandingPage/advantages_svg/professional_advice_svg';
    import ServiceGuaranteeSVG from '../LandingPage/advantages_svg/service_guarantee_svg';
    export default {
        components: {DeliverySVG, DiscountSVG, LocalProductionSVG,PricePolicySVG, ProfessionalAdviceSVG, ServiceGuaranteeSVG},
        name: "advantages",
        data() {
            return {
                RowAdvantages:[
                    {
                        Advantages:[
                            {
                                svg:PricePolicySVG, name_advantages:'Оптимальные сроки и ценовая политика',
                                descr_advantages:'Наша компания учитывает индивидуальные особенности каждого заказа и предлагает лучшие условия для Заказчика',

                            },
                            {
                                svg:LocalProductionSVG, name_advantages:'Собственное локальное производство',
                                descr_advantages:'Мы имеем собственный цех, оснащенный современным оборудованием, что позволяет в кратчайшие сроки выполнить работу по договору.',
                            },
                            {
                                svg:ProfessionalAdviceSVG, name_advantages:'Профессиональная консультация',
                                descr_advantages:' Наши сотрудники готовы ответить на любые Ваши вопросы, обсудить тонкости Заказа и предложить самые лучшие варианты по выполнению Заказа.',
                            },
                        ],
                    },
                    {
                        Advantages:[
                            {
                                svg:ServiceGuaranteeSVG, name_advantages:'Гарантия на услуги',
                                descr_advantages:' На все производимые работы предоставляется гарантия сроком от 12 месяцем.',
                            },
                            {
                                svg:DiscountSVG, name_advantages:'Скидка на первый заказ',
                                descr_advantages:' Нам важен каждый клиент, поэтому мы предоставляем скидку  50% на любой первый заказ',
                            },

                            {
                                svg:DeliverySVG, name_advantages:'Доставка',
                                descr_advantages:'  Высылаем ваши изделия после выполнения услуг в удобное для Вас время с помощью системы СДЭК',
                            }
                        ],
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>