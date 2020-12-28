<template>
    <div class="myfooter">
        <b-container>
            <b-row>
                <b-col v-for="(page_catalog,index) in catalog_pages" :key="index">
                    <div v-for="(value, index) in page_catalog.pages" :key="index">
                        <router-link  :to="value.link">{{value.page}}</router-link>
                        <br><br>
                    </div>
                </b-col>
                <b-col>{{address.manufacturers_address}}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import address from '../../public/documents/address.json';
    export default {
        name: "myfooter",
        data(){
            return{
                address:address,
                catalog_pages:[
                    {
                        pages:[
                            {
                                link: "/company",
                                page: "О нас",
                            },
                            {
                                link: "/equipment",
                                page: "Оборудование",
                            },
                        ],
                    },
                    {
                        pages:[
                            {
                                link: "/#activity",
                                page: "Услуги",
                            },
                            {
                                link: "/samples_of_work",
                                page: "Образцы работ",
                            },
                        ],
                    },
                    {
                        pages:[
                            {
                                link: "/contacts",
                                page: "Отзывы",
                            },
                            {
                                link: "/contacts",
                                page: "Контакты",
                            },
                        ],
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .myfooter{
        background: #0d0d1b;
        padding: 1.8% 0;
    }
    .col{
        font-size: 1.15rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.9) !important;
        font-weight: 600;
        font-family: "Tenor Sans", sans-serif;
        text-shadow: 1.2px 1.2px 1.2px #152534;
    }
    a{
        color: rgba(255, 255, 255, 0.9) !important;
    }
    @media screen and (max-width: 500px) {
        .col{
            font-size:0.55rem;
            padding: 0 5px !important;
        }

    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .col{
            font-size:0.8rem;
        }

    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .col{
            font-size: 1rem;
        }
    }
    @media screen and (min-height: 992px){
        .myfooter{
            background: #0d0d1b;
            padding: 2.25% 0;
        }
    }

</style>