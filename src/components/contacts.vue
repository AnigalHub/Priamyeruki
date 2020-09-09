<template>
    <div id="contacts">
        <b-container>
            <h2>Контакты</h2>
            <div class="text">
               <b>ООО «Аваконт»</b>
                <br>
               <b>Телефон:</b>  +7 (495) 369-26-73
                <br>
                <b>Почта:</b> priamyeruki@mail.ru
                <br>
               <b>Часы работы:</b>  Пн. – Пт.: с 9:00 до 18:00
            </div>
            <b-row>
                <b-col>
                    <div class="text">
                       <b><u>Адрес офиса продаж:</u></b>  140054, Московская обл., г. Котельники, терр. Новорязанское шоссе,
                        дом 6, офис 9-10, этаж 2
                    </div>
                </b-col>
                <b-col>
                    <div class="text">
                        <b><u>Адрес производства:</u></b>  140015, Московская обл., г. Люберцы, Инициативная ул., дом 34А,
                        объект 3, офис 5.
                    </div>
                </b-col>
            </b-row>
            <div class="feature map" id="map-wrap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.5065661296035!2d37.90404039139417!3d55.68187746704363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab62f6d977c57%3A0xb6fd3dd42c79d783!2z0YPQuy4g0JjQvdC40YbQuNCw0YLQuNCy0L3QsNGPLCAzNNCQLCDQm9GO0LHQtdGA0YbRiywgTW9zY293IE9ibGFzdCwgMTQwMDAw!5e0!3m2!1sru!2sru!4v1595516566930!5m2!1sru!2sru" frameborder="0"  allowfullscreen="" aria-hidden="false" ></iframe>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "contacts"
    }
</script>

<style scoped lang="scss">
    .text{
        text-indent: 0 !important;
    }
    .col{
        padding: 0 !important;
    }
    .feature.map {
        iframe {
            min-height: 570px;
            box-shadow: none !important;
            height: auto;
            width:100%;
            border:0;
            filter: brightness(99%);
            border-radius: 0.5rem;
        }
    }
    @media screen and (max-width: 500px) {
        .row{
            flex-direction: column;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .row{
            flex-direction: column;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .row{
            flex-direction: column;
        }
    }
</style>