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
                <iframe :src="address.map" title="адрес_компании_Аваконт"></iframe>
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

</style>