<template>
    <div class="myfooter">
        <b-container>
            <b-row>
                <b-col>
                    <router-link to="/company">
                        О нас
                    </router-link>
                    <br><br>
                    <router-link to="/equipment">
                        Оборудование
                    </router-link>
                </b-col>
                <b-col>
                    <router-link to="/activity">
                        Услуги
                    </router-link>
                    <br><br>
                    <router-link to="/samples_of_work">
                        Образцы работ
                    </router-link>
                </b-col>
                <b-col>
                    Отзывы
                    <br><br>
                    <router-link to="/contacts">
                        Контакты
                    </router-link>
                </b-col>
                <b-col>
                    г. Люберцы, Инициативная ул.,
                    дом 34А, объект 3, офис 5
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "myfooter"
    }
</script>

<style scoped lang="scss">
    .myfooter{
        background: #0d0d1b;
        background-size:100% 100%;
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
</style>