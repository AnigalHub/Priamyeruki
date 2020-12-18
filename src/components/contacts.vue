<template>
    <div id="contacts">
        <b-container>
            <h2>Контакты</h2>
            <div class="text">
               <b>ООО «Аваконт»</b><br>
               <b>Телефон:</b><a :href="'tel:' + address.phone"> {{address.phone}}</a><br>
                <b>Почта:</b><a :href="'mailto:'+ address.mail">{{address.mail}}</a><br>
               <b>Часы работы:</b>{{address.working_hours}}
            </div>
            <b-row>
                <b-col class="text">
                   <b><u>Адрес офиса продаж:</u></b>{{address.sales_office_address}}
                </b-col>
                <b-col class="text">
                    <b><u>Адрес производства:</u></b>{{address.manufacturers_address}}
                </b-col>
            </b-row>
            <div class="feature map">
                <iframe :src="address.map"></iframe>
            </div>
        </b-container>
    </div>
</template>

<script>
    import address from '../../public/documents/address';

    export default {
        name: "contacts",
        data(){
            return {
               address: address,
            }
        }
    }
</script>

<style scoped lang="scss">
    a {
        color: #152534;
    }
    a:hover{
        color: rgba(23, 8, 133, 0.9);
        font-weight: 600;
    }
    .text{
        text-indent: 0 !important;
    }
    .col{
        padding-left: 0 !important;
    }
    .feature.map {
        iframe {
            min-height: 700px;
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
    @media screen and (min-width: 2000px) and (min-height: 992px){
        .row {
            flex-direction: column;
        }
        .feature.map {
            iframe {
                min-height: 1250px;
            }
        }
    }
</style>