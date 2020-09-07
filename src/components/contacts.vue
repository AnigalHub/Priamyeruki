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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.3667448215588!2d37.90788968635636!3d55.68261136075007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab62f36233ba3%3A0xd58993035d45f4f0!2z0YPQuy4g0JjQvdC40YbQuNCw0YLQuNCy0L3QsNGPLCAzNCwg0JvRjtCx0LXRgNGG0YssINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MDAwMA!5e0!3m2!1sru!2sru!4v1596318623353!5m2!1sru!2sru"
                 frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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