<template>
    <div id="painting">
        <b-container>
            <h2>Малярно-покрасочные работы</h2>
            <p class="text">
                Усовершенствованная технология выполнения малярно-покрасочных работ и современное
                оборудование и материалы для покраски гарантируют Вам самое высокое качество работы.
            </p>
            <b-row class="important_row">
                <b-col cols="5">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4DFwsldKwcI"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </b-col>
                <b-col>
                    <p class="text">
                       <u>Наш цех состоит из нескольких отделений:</u>
                    </p>
                    <ul class="text">
                        <li v-for="(paragraph, index) in  list_shop" :key="index" v-html="paragraph"></li>
                    </ul>
                </b-col>
            </b-row>
            <h4 class="text_after_video">Этапы технологического процесса:</h4>
            <div v-for="(service,index ) in  StepsService" :key="service.index">
                <service :index="index" :name_service="service .name_service" :description_service="service .description_service"
                         :img_service="service.img_service">
                </service>
            </div>
            <h4>Прайс-лист:</h4>
            <b-table  hover :items="painting.price_table_1"></b-table>
            <p class="additional_information">{{painting.description_1}}</p>
            <b-table  hover :items="painting.price_table_2"></b-table>
            <p class="additional_information">{{painting.description_2}}</p>
        </b-container>
    </div>
</template>

<script>
    import Service from "../Service";
    import  painting from '../../../public/documents/prices/painting_works/price_painting.json';
    export default {
        name: "painting_works",
        components: {Service},
        data() {
            return {
                painting: painting,
                list_shop:[
                    ' <b> производственный участок </b> – территория цеха, где происходит окраска любой конструкции;',
                    '<b> сушильная камера </b> – территория для просушки окрашенной поверхности после окраски;',
                    '<b> склад  </b> – территория, где хранятся  все инструменты и материалы, которые применяются в ходе работы.',
                ],
                StepsService: [
                    {
                        name_service: 'Демонтаж детали',
                        description_service: ' Очистка детали от внешних отложений – обязательная операция,' +
                        ' определяющая качество последующих этапов. Представляет собой' +
                        ' удаление ржавчин, старой краски и коррозий, которые могут' +
                        ' помешать качественной покраски.',
                        img_service: {
                            imgSrc:'./images/painting_1.jpg',
                            imgAlt:'Демонтаж_детали',
                        },
                    },
                    {
                        name_service: 'Обезжиривание',
                        description_service: ' Удаление разнообразных соединений, имеющих органическое' +
                        ' происхождение: промасленная грязь, жировая пленка, накипь,' +
                        ' резиновая крошка, смазка и прочее. В производственном цехе' +
                        ' используется два вида обезжиривания специальными веществами:' +
                        ' бесконтактный (нанесения активной пены на деталь), контактный' +
                        ' (с помощью мягкой тряпки или губки).',
                        img_service: {
                            imgSrc:'./images/painting_2.jpg',
                            imgAlt:'Обезжиривание',
                        },
                    },
                    {
                        name_service: 'Подготовка поверхности детали к покраске и грунтование',
                        description_service: ' Механическая обработка поверхности абразивными материалами,' +
                        ' позволяющая поверхности придать некоторую шероховатость для' +
                        ' более прочного сцепления лакокрасочного покрытия с' +
                        ' окрашиваемой поверхностью.' +
                        'Антикоррозионная обработка детали – окончательная подготовка детали' +
                        ' перед нанесением выбранной краски. На этом этапе поверхность детали' +
                        ' идеально выравнивается и сглаживается, убираются самые' +
                        ' микроскопические дефекты.',
                        img_service: {
                            imgSrc:'./images/painting_3.png',
                            imgAlt:'Подготовка_поверхности_детали_к_покраске_и_грунтование',
                        },
                    },
                    {
                        name_service: 'Нанесение краски и сушка',
                        description_service: '   С помощью краскопульта сотрудники компании наносят три слоя' +
                        ' лакокрасочного покрытия, полностью перекрывая грунт. Затем деталь' +
                        ' отправляется в сушильную камеру до полного высыхания.',
                        img_service: {
                            imgSrc:'./images/painting_4.jpg',
                            imgAlt:'Нанесение_краски_и_сушка',
                        },
                    },
                ],
            }
        }
    }
</script>
<style scoped lang="scss">

    li{
        padding-bottom: 1.8%;
    }
</style>