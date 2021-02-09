<template>
    <div id="home">
        <div id="background">
            <b-container>
                <div class="description">
                    Изготовление разнообразного декора, рекламных вывесок,
                    сувенирной продукции, реставрация, брендирование
                </div>
                <div class="buttons justify-content-center">
                    <router-link :to="{name: 'Samples'}" tag="button">Портфолио</router-link>
                    <router-link :to="{name: 'Equipment'}" tag="button">Производство</router-link>
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
        background-color: rgba(0, 0, 0, 0.35);
        padding: 8.5% 0 8.5% 0;
        border-bottom: 2px solid #152534;
    }
    #home{
        background: url("../../../public/images/background/background.jpg") 100% 100% no-repeat;
        background-attachment: fixed;
        background-position: 100%;
        background-size: 100% ;
    }
    .description{
        text-align: center;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 600;
        cursor: default;
        line-height: 3rem;
        font-family: "Lora", serif;
        text-shadow: 1.4px 1.4px 1.4px #152534;
        font-size: 2.6rem;
    }
    button{
        width: 45%;
        background: radial-gradient(50% 70%, #ffffff, rgb(160, 156, 161));
        border: 2px solid white !important;
        font-family: "Lora", serif;
        border-radius: 7px;
        margin-top: 6%;
        font-weight: 700;
        color: #0d2331;
        text-shadow: 1px 1px 2px #193647;
        margin-left: 2% !important;
        margin-right: 2% !important;
        padding: 0.8%;
        font-size: 1.45rem;
    }
    button:hover{
        background: #ffffff !important;
        color: black;
        text-shadow: 1.5px 1.5px 2px white;
        border: 2px solid #193647;
        box-shadow: 5px 5px 5px #696969;
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
        #background{
            padding:9.5% 0 9.5% 0;
        }
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
    @media screen and (max-width: 1300px) {
        #home{
            background: url("../../../public/images/background/background_double.jpg") 100% 100% no-repeat;
            background-attachment: initial;
            background-position: 100%;
            background-size: 100% 100%;
        }
    }

</style>