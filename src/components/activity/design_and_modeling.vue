<template>
    <div id="modeling">
        <b-container>
            <h2>Проектирование и моделирование</h2>
            <p class="text">
                Создание любой оригинальной детали начинается с составления проекта, полностью
                соответствующее ожиданиям клиента. Наша компания готова помочь Вам в этой непростой
                задаче. На каждый проект мы составляем техническое задание и формируем список требований
                клиента, который в любой момент готовы изменить по вашим пожеланиям.
            </p>
            <b-row class="important_row">
                <b-col cols="5">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uquWtDIsbDM"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </b-col>
                <b-col>
                    <div class="text">
                        Инженеры компании ООО «Аваконт» используют два
                        <u> комплексных решения </u> в процессе проектирования
                        и моделирования:
                        <ul>
                            <li v-for="(solution, index) in  complex_solutions" :key="index" v-html="solution"></li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
            <div class="text text_after_video">
            Изготавливая 3D модель Вашего изделия, мы не просто изображаем Вашу идею, а учитываем:
                <ul>
                    <li v-for="(detail, index) in  manufacturing_details" :key="index">{{detail}}</li>
                </ul>
                В нашей компании работают высококлассные специалисты, понимающие в специфике работы.
                Разработка 3D модели происходит качественно и в установленные сроки. В результате Заказчик
                получает мастер-модель требуемого изделия, с полным списком всех параметров.
            </div>
            <h4>Процесс проектирования и моделирования включается следующие стадии:</h4>
            <div v-for="(service,index ) in  StepsService" :key="service.index">
                <service :index="index" :name_service="service .name_service" :description_service="service .description_service"
                         :img_service="service.img_service">
                </service>
            </div>
            <p class="price">{{price_description}}</p>
        </b-container>
    </div>
</template>

<script>
    import  price_description from '../../../public/documents/prices/design_and_modeling/price_description.json';
    import Service from "../Service"
    export default {
        name: "design_and_modeling",
        components: {Service},
        data() {
            return {
                price_description:price_description,
                complex_solutions:[
                    '<u> SolidWorks </u> (программный комплекс САПР для автоматизации работ промышленного предприятия на этапах ' +
                    'конструкторской и технологической подготовки производства);</li>',
                    '<u> Autodesk Fusion 360</u>(комплексный облачный CAD/CAE/CAM инструмент для промышленного дизайна' +
                    ' и машиностроительного проектирования (САПР нового поколения)).',
                ],
                manufacturing_details:[
                    'Прочность конструкции (деформация, трещиностойкость, устойчивость, механика разрушения, динамический анализ и прочее);',
                    'Соединения в конструкциях (резьбовые, сварные, заклепочные, соединения тел вращения);',
                    'Срок службы и долговечность (валы и оси, механические передачи, кулачковые механизмы и т.д.);',
                    'Проектировочные и проверочные расчеты.',
                ],
                StepsService: [
                    {
                        name_service: 'Определяем потребности Заказчика и составляем техническое задание',
                        description_service: ' Сотрудники нашей компании учитывают требования клиента, связанные с функционированием' +
                        ' изделия и вместе с Заказчиком составляют' +
                        ' техническое задание, проверяя наименования, область применения' +
                        ' изделия, цель, материал, габариты, толщину изделия и прочее.',
                        img_service: {
                            imgSrc:'./images/modelling_4.jpg',
                            imgAlt:'Составление_ТЗ',
                        },
                    },
                    {
                        name_service: 'Построение модели',
                        description_service: ' Создаваемую модель подвергаем критическому анализу (производим исследование, вырабатываем решение,' +
                        ' выделяем окончательную концепцию), выявляем' +
                        ' несоответствие целям моделирования.',
                        img_service: {
                            imgSrc:'./images/modelling_5.png',
                            imgAlt:'Построение_модели',
                        },
                    },
                    {
                        name_service: 'Анализ результатов моделирования',
                        description_service: '   Исследуем полученные результаты (испытываем решение на соответветствие рабочих показателей),' +
                        ' детально прорабатываем проект и корректируем исследуемую модель.',
                        img_service: {
                            imgSrc:'./images/modelling_6.jpg',
                            imgAlt:'Анализ_результатов_моделирования',
                        },
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>