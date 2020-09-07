<template>
    <div id="home">
        <div id="background">
            <b-container>
                <div class="description">
                    Изготовление разнообразного декора, рекламных вывесок,
                    сувенирной продукции, реставрация, брендирование
                </div>
                <div class="buttons justify-content-cente">
                        <router-link to="/samples_of_work">
                            <button type="submit">Наши работы</button>
                        </router-link>
                    <router-link to="/equipment">
                        <button type="submit">Производство</button>
                    </router-link>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    #background{
       background-color: rgba(0, 0, 0, 0.45);
       padding: 6.9% 0 6.9% 0;
    }
    #home{
        background: url("../../../public/images/bb.jpg") 100% 100% no-repeat;
        background-attachment: fixed;
        background-position: 100%;
        background-size: 100% ;
    }
    .description{
        text-align: center;
        color: rgba(255, 255, 255, 0.85);
        font-weight: 600;
        cursor: default;
        line-height: 3rem;
        font-family: "Tenor Sans", sans-serif;
        text-shadow: 1.2px 1.2px 1.2px #152534;
        font-size: 2.6rem;
    }
    button{
        width: 45%;
        background: radial-gradient(50% 70%, #ffffff, rgb(160, 156, 161));
        border: 0 !important;
        border-radius: 7px;
        margin-top: 6%;
        font-weight: 700;
        color: #152534;
        margin-left: 1% !important;
        margin-right: 1% !important;
        padding: 0.7%;
        font-size: 1.3rem;
    }
    button:hover{
        background: #ffffff;
        box-shadow: 7px 7px 7px #696969;
    }
    .buttons{
        margin: 0 20% !important;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    @media screen and (max-width: 500px) {
        .description{
            font-weight: 600;
            line-height: 1.8rem;
            font-size: 1.4rem;
            padding-bottom: 7%;
        }
        #background{
            padding: 9% 0 9% 0;
        }
        .buttons{
            margin: 0 5% !important;
        }
        button{
            width: 47%;
            margin-left: 1.5% !important;
            margin-right: 1.5% !important;
            margin-bottom: 2%;
            padding: 0.8%;
            font-size: 1rem;
            background: radial-gradient(50% 70%, #ffffff, rgb(144, 140, 145));
        }
    }

    @media screen and (min-width: 500px)and (max-width: 768px) {
        .description{
            line-height: 2rem;
            font-size: 1.7rem;
        }
        .buttons{
            margin: 0 15% !important;
        }
        button{
            width: 48%;
            margin-left: 0.8% !important;
            margin-right: 0.8% !important;
            background: radial-gradient(50% 70%, #ffffff, rgb(144, 140, 145));
            padding: 0.8%;
            font-size: 1.2rem;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 1200px) {
        .description{
            line-height: 2.5rem;
            font-size: 2rem;
        }
    }
    @media screen and (max-width: 1200px) {
        #home{
            background: url("../../../public/images/bb2.jpg") 100% 100% no-repeat;
           background-attachment: initial;
           background-position: 100%;
           background-size: 100% 100%;
        }
    }

</style>