<template>
    <div id="mymap">
        <div class="feature map" id="map-wrap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.5065661296035!2d37.90404039139417!3d55.68187746704363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab62f6d977c57%3A0xb6fd3dd42c79d783!2z0YPQuy4g0JjQvdC40YbQuNCw0YLQuNCy0L3QsNGPLCAzNNCQLCDQm9GO0LHQtdGA0YbRiywgTW9zY293IE9ibGFzdCwgMTQwMDAw!5e0!3m2!1sru!2sru!4v1595516566930!5m2!1sru!2sru" frameborder="0"  allowfullscreen="" aria-hidden="false" ></iframe>
        </div>
    </div>
</template>
<script>
    export default {
        name: "mymap"
    }
</script>

<style scoped lang="scss">
    .feature.map {
       background-color: #0e111d;
        iframe {
            min-height: 400px;
            height: auto;
            width:100% !important;
            border:0;
           filter: brightness(88%);
            box-shadow: none !important;
        }
    }
    @media screen and (max-width: 500px) {

        .feature.map {
            iframe {
                min-height: 250px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {

        .feature.map {
            iframe {
                min-height: 330px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
</style>