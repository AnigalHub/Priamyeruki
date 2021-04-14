<template>
    <div id="mymap">
        <div class="feature map">
            <iframe :src="address.map" title="адрес_компании_Аваконт"></iframe>
        </div>
    </div>
</template>
<script>
    import address from './../../../public/documents/address.json';
    export default {
        name: "mymap",
        data(){
            return{
                address:address,
            }
        }
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
            filter: brightness(95%);
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