<template>
    <div id="equipment">
        <b-container>
            <h2>Производство</h2>
            <p class="text">
            Производственная площадь цеха составляет более <b>200</b> кв.м. Ниже представлена краткая
            информация об оборудовании цеха компании ООО «Аваконт»:
            </p>
            <b-table hover :items="item" :fields="TableFields">
              <template v-slot:cell(specifications)="{item}">
                    <p v-for=" value in item.specifications" :key="value">{{value}}</p>
              </template>
              <template v-slot:cell(equipment)="{item}">
                    <img :src="item.equipment.imgSrc" :alt="item.equipment.imgAlt">
              </template>
            </b-table>
</b-container>
</div>
</template>

<script>
    export default {
        name: "equipment",
        data() {
            return {
                item: [
                        {
                            name:'Фрезерно-гравировальный станок с ЧПУ (FZT-1212)',
                            specifications:[
                                'Ход по оси X: 1200мм;',
                                'Ход по оси Y: 1200мм;' ,
                                'Ход по оси Z: 150мм;' ,
                                'Тип направляющих: рельсовые;',
                                'Тип передачи по осям XY: зубчато-реечная;',
                                'Тип передачи по оси Z: ШВП;' ,
                                'Двигатели по осям: шаговые;',
                                'Скорость подачи по осям XY: до 10000мм/мин;',
                                'Дискретность: 0.02мм;',
                                'Повторяемость: 0.2мм/1000 мм;',
                                'Рабочий стол: алюминиевый профиль с Т-пазами;',
                                'Управление: от персонального компьютера, программа Mach3;',
                            ],
                            equipment: {
                                imgSrc:'./images/equipment_1.jpg',
                                imgAlt:'FZT-1212',
                            },
                        },
                        {
                            name:'Лазерный гравер CNC-3018',
                            specifications:[
                                'Размер станка общий: 33x40x24см;',
                                'Рабочая зона: 30x18x4.5см;',
                                'Привод шпинделя: 775 мотор (12-36В),24В: 10000r/мин;',
                                'Патрон шпинделя: цанговый ER11;',
                                'Шаговый двигатель: 34мм, ток 1.3A, 12В;',
                                'Крутящий момент 0.25 N/m;',
                                'Питание: 24В, 6A;',
                                'Поддерживается система: Windows;',
                                'Наконечники: 0.1мм, 20градусов, D=3мм;',
                                'Зажимы: толщина 0-30мм;',
                                'Размер: 50х20х12;',
                                'Лазеры: 12В/500МВт 405нм,12В/2500МВт 450нм, 12В/5500МВт 450нм;',
                            ],
                            equipment: {
                                imgSrc:'./images/equipment_3.jpg',
                                imgAlt:'CNC-3018',
                            },
                        },
                        {
                            name:'Установка химической металлизации “Старт”',
                            specifications:[
                                'Установка самотечного типа;',
                                'Рабочее давление в химическом пистолете: 2.5атм;',
                                'Воздух в баллоне с водой: 0.1атм;',
                                'Основной воздух: 5-6атм;',
                                'Объем колб: 3л;',
                                'Количество подключенных пистолетов: продувочный, поливочный;',
                                'Комплектация: химия и реагенты;',
                                'Компрессор 50л: производительность 206л/мин, напряжение 220Вт;',
                            ],
                            equipment: {
                                imgSrc:'./images/equipment_5.jpg',
                                imgAlt:'Установка_химической_металлизации',
                            },
                        },
                        {
                            name:'Пескоструйная камера NORDBERG NS4',
                            specifications:[
                                'Объем камеры: 420л',
                                'Загрузка: боковая;' ,
                                'Расход воздуха: 550-700л/мин;',
                                'Рабочее пространство: 1210x600x580мм',
                            ],
                            equipment: {
                                imgSrc:'./images/equipment_2.jpg',
                                imgAlt:'NORDBERG-NS4',
                            },

                        },
                        {
                            name:'Технологическая ванна для аквапринта “Старт”',
                            specifications:[
                                'Размеры: 1000x700мм;',
                                'Корпус: алюминиевый лист марки АМГ-5, коррозийной стойкости;',
                                'Напряжение: 220В;',
                                'ТЭН (мощность): 3кВт;',
                                'Комплектация: цифровой блок управления, ТЭН, температурный датчик,циркуляционный насос,' +
                                'трубопровод,двойная система фильтрации',
                            ],
                            equipment: {
                                imgSrc:'./images/equipment_4.jpg',
                                imgAlt:'Технологическая_ванна_для_аквапринта',
                            },
                        },
                   ],

                TableFields:[
                    {
                        key:"name",
                        label:"Название",
                        tdClass:"centerize",
                    },
                    {
                        key:"specifications",
                        label:"Характеристики",
                        tdClass:"centerize",
                    },
                    {
                        key:"equipment",
                        label:"Оборудование",
                        tdClass:"centerize",
                    }
                ]
            }
        }
    }
</script>
<style >
    @media screen and (max-width: 500px) {
        tr:hover {
            background: rgba(255, 255, 255, 0.87) !important;
        }
        td,th{
            border: 0.4px solid #173e4e !important;
        }
        th:last-child, td:last-child {
            display: none !important;
        }
    }
    th {
        background: #152534 !important;
    }
</style>
<style scoped lang="scss">
    #equipment{
        padding-bottom: 2%;
    }
    h2{
        text-align: left !important;
        padding-bottom: 1% !important;
    }
    p {
        margin-bottom: -0.2rem !important;
        text-align:left !important;
    }
    img{
        box-shadow: none !important;
    }
    @media screen and (max-width: 500px) {

        table{
            padding-top: 2%;
        }
    }

    @media screen and (min-width: 500px)and (max-width: 768px) {
        td {
            display: block !important;
        }

        th:last-child {
            display: none !important;
        }
    }




</style>