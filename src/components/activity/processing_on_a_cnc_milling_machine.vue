<template>
    <div id="processing">
        <b-container>
            <h2>Обработка дерева, металла и пластика на фрезерном станке ЧПУ</h2>
            <p class="text">
                Компания ООО «Аваконт» занимается любыми производственными объемами фрезерной обработки
                и имеет возможности для решения большого спектра задач: от изготовления уникальных
                единичных товаров до серийного производства однотипных изделий.
            </p>
            <b-row class="important_row">
                <b-col cols="5">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6flJjWFIFXI"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </b-col>
                <b-col>
                    <p class="text">
                        В производственном цехе наша компания имеет <u>фрезерно-гравировальный станок FZT-1212.</u>
                    </p>
                    <p class="text">
                        Сфера применения станка практически не ограничена,
                        он оснащен современной системой ЧПУ, что
                        предоставляет возможность обрабатывать самые
                        разнообразные материалы: пластик, фанера, дерево,
                        цветные металлы.
                    </p>
                    <p class="text">
                        Фрезерный обрабатывающий центр ЧПУ
                        позволяет изготавливать изделия любой сложности высокого качества.
                    </p>
                </b-col>
            </b-row>
            <p class="text text_after_video">
                С помощью этого станка наши сотрудники изготавливают 3D
                детали машин и механизмов, формы для литья, фигурные шайбы
                и прокладки, приборные панели, корпуса для аппаратуры,
                элементы декора, фигурные объемные буквы, латунные и
                алюминиевые таблички, вывески, декоративные изделия из
                дерева.
            </p>
            <p class="text">
                Работа на фрезерно-гравировальном станке с ЧПУ основывается на микропроцессорах и
                операционных системах, а собственные микроконтроллеры системы ЧПУ управляют приводами.
                Благодаря полной автоматизации процесса, мы добиваемся самой точной обработки разнообразных
                материалов: снижаем до минимума вероятность брака, что увеличивает производительность работы.
            </p>
            <h4>Этапы работы изготовления детали на фрезерно-гравировальном станке с ЧПУ:</h4>
            <div v-for="(service,index ) in  StepsService" :key="service.index">
                <service :index="index" :name_service="service .name_service" :description_service="service .description_service"
                         :img_service="service.img_service">
                </service>
            </div>
            <h4>Прайс-лист:</h4>
            <b-card no-body>
                <b-tabs card>
                    <b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.name">
                        <b-card-text>
                            <h5>{{tab.name}}</h5>
                            <b-table  hover :items="tab.pricelist"></b-table>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import  pricelist_wood from '../../../public/documents/pricelist_wood';
    import  pricelist_plywood from '../../../public/documents/pricelist_plywood';
    import  pricelist_dsp from '../../../public/documents/pricelist_dsp';
    import  pricelist_composite from '../../../public/documents/pricelist_composite';
    import  pricelist_pvc from '../../../public/documents/pricelist_pvc';
    import  pricelist_polycarbonate from '../../../public/documents/pricelist_polycarbonate';
    import  pricelist_polystyrene from '../../../public/documents/pricelist_polystyrene';
    import  pricelist_aluminum from '../../../public/documents/pricelist_aluminum';
    import Service from "../Service"
    export default {
        name: "processing_onPa_cnc_milling_machine",
        components: {Service},
        data() {
            return {
                tabs:[
                    {
                        name: "Дерево",
                        pricelist: pricelist_wood,
                    },
                    {
                        name: "Фанера",
                        pricelist: pricelist_plywood,
                    },
                    {
                        name: "ДСП",
                        pricelist:  pricelist_dsp,
                    },
                    {
                        name: "Композит",
                        pricelist: pricelist_composite,
                    },
                    {
                        name: "ПВХ",
                        pricelist: pricelist_pvc,
                    },
                    {
                        name: "Поликарбонат",
                        pricelist:pricelist_polycarbonate,
                    },
                    {
                        name: "Алюминий",
                        pricelist:pricelist_aluminum,
                    },
                    {
                        name: "Полистирол",
                        pricelist:pricelist_polystyrene,
                    },

                ],
                pricelist_wood: pricelist_wood,
                pricelist_plywood: pricelist_plywood,
                pricelist_dsp: pricelist_dsp,
                pricelist_composite:pricelist_composite,
                pricelist_pvc:pricelist_pvc,
                pricelist_polycarbonate:pricelist_polycarbonate,
                pricelist_polystyrene:pricelist_polystyrene,
                pricelist_aluminum:pricelist_aluminum,
                StepsService: [
                    {
                        name_service: 'Разработка технического задания (чертеж) и дизайн будущей детали',
                        description_service: 'С Заказчиком обговариваются материал, размеры и габариты будущей детали,' +
                        ' на основании которых создается исходник, по которому формируется 3D модель' +
                        ' и в зависимости от алгоритмов фрезеровки используются специализированные' +
                        ' программы, такие как SolidWorks, Fusion 360,  ArtCam  и прочими. Широкий спектр' +
                        ' используемых программ позволяет нам реализовать самые сложные решения, и работать' +
                        'с различными форматами типа DWG, DXF, STL, F3D и многими другими. Поэтому если у Вас' +
                        ' есть готовый макет, у нас не возникает сложностей с его адаптацией.',
                        img_service: {
                            imgSrc:'./images/processing_1.jpg',
                            imgAlt:'Разработка_технического_задания_и_дизайн_будущей_детали',
                        },
                    },
                    {
                        name_service: 'Программирование для ЧПУ',
                        description_service: '  С помощью программного обеспечения определяются базовые параметры модели, такие' +
                        ' как координаты XYZ, размеры заготовки, выбираются алгоритмы фрезерования, исходя' +
                        ' из особенностей детали, типы инструментов и после  происходит сохранение САМ процесса' +
                        ' в G-код, специализированный код для программирования станков с ЧПУ. Подготовленный' +
                        ' файл вводится в адаптивную программу для станка с ЧПУ, устанавливаются все необходимые' +
                        ' параметры процесса обработки детали: глубина, направления, размеры готовой детали,' +
                        ' делается тонкая настройка скорости шпинделя и подачи материала.',
                        img_service: {
                            imgSrc:'./images/processing_2.jpg',
                            imgAlt:'Программирование_для_ЧПУ',
                        },
                    },
                    {
                        name_service: 'Изготовление детали на станке по установленной управляющей программе',
                        description_service: '    Данный этап предусматривает несколько важных шагов:' +
                        ' закрепление заготовки на рабочем столе станка с ЧПУ, пробный прогон, проверка программы на ошибки и запуск фрезеровки.' +
                        ' Регулировка смещения - проверка детали на заданные размеры (регулирование регистров коррекции).',
                        img_service: {
                            imgSrc:'./images/processing_3.jpg',
                            imgAlt:'Изготовление_детали_на_станке',
                        },
                    },
                ],
            }
        },
        methods:{
            Test(){
                console.log(this.pricelist);
            }
        },
    }
</script>
<style>
    .card {
        background: none !important;
        border: 1px solid #173e4e !important;
    }
    .card-header {
        border-bottom: 1px solid #173e4e !important;
        background: none !important;
    }
    .nav-tabs .nav-link.active{
        color: #152534 !important;
        font-weight: 800 !important;
        border-color: #173e4e #173e4e  !important;
    }
    .nav-link.active{
        background: rgba(17, 53, 67, 0.32) !important;
    }
    a{
        color: #152534 !important;
    }
    .nav-tabs{
        font-family: 'Noto Serif TC', serif;
        font-size: 1.3rem;
    }
    .card-body h5{
        display: none !important;
    }
    @media screen and  (max-width: 992px) {
        .tab-content > .tab-pane {
            display: block !important;
        }
        .card-body h5{
            display: block !important;
        }
        .card-body{
            padding: 0.25rem !important;
        }
        .card-header{
            display: none !important;
        }
        .card {
            background: none !important;
            border: none !important;
        }
    }

</style>
<style scoped lang="scss">
    li {
        text-indent: 0 !important;
    }
    .description_row{
        .col{
            display: block !important;
            align-items: center
        }
    }
    h5:nth-last-child(n+2){
        text-align: center !important;
    }
</style>