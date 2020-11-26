<template>
    <div id="contacts">
        <b-container>
            <h2>Контакты</h2>
            <div class="text">
               <b>ООО «Аваконт»</b><br>
               <b>Телефон:</b><a :href="'tel:' + phone"> {{phone}}</a><br>
                <b>Почта:</b><a :href="'mailto:'+ mail">{{mail}}</a><br>
               <b>Часы работы:</b>{{working_hours}}
            </div>
            <b-row>
                <b-col class="text">
                   <b><u>Адрес офиса продаж:</u></b>{{sales_office_address}}
                </b-col>
                <b-col class="text">
                    <b><u>Адрес производства:</u></b>{{manufacturers_address}}
                </b-col>
            </b-row>
            <div class="feature map">
                <iframe :src="map"></iframe>
            </div>
        </b-container>
    </div>
</template>

<script>
    import manufacturers_address from '../../public/documents/address/manufacturers_address';
    import sales_office_address from '../../public/documents/address/sales_office_address.json';
    import phone from '../../public/documents/address/phone.json';
    import mail from '../../public/documents/address/mail.json';
    import working_hours from '../../public/documents/address/working_hours.json';
    import map from './../../public/documents/address/map.json';
    export default {
        name: "contacts",
        data(){
            return {
                manufacturers_address: manufacturers_address,
                sales_office_address:sales_office_address,
                phone:phone,
                working_hours:working_hours,
                mail:mail,
                map:map,
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