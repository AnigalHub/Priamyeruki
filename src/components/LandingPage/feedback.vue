<template>
    <div id="feedback">
        <div id="background">
            <b-container>
                <h2 class="h2_light">Обратная связь</h2>
                <form name="sentMessage" id="Form">
                    <b-row>
                        <b-col cols="4">
                            <label class="text_night" for="name">Ваше имя:</label>
                            <input type="text" class="form-control" placeholder="ФИО" id="name" name="name" required="" data-validation-required-message="Пожалуйста, введите Ваше имя">
                            <label class="text_night" for="phone">Ваше телефон:</label>
                            <input type="tel" class="form-control" placeholder="+7(xxx)xxx-xx-xx" pattern="+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" id="phone" name="phone" required="" data-validation-required-message="Пожалуйста, введите Номер телефона">
                            <label class="text_night" for="mail">Ваш E-mail:</label>
                            <input type="email" class="form-control" placeholder="Электронная почта" id="mail" name="mail" required="" data-validation-required-message="Пожалуйста, введите Ваш электронный адрес">
                        </b-col>
                        <b-col>
                            <label class="text_night" for="message">Ваше сообщение:</label>
                            <textarea class="form-control" placeholder="Опишите ваш запрос" id="message" name="message" required="" data-validation-required-message="Пожалуйста, введите сообщение"></textarea>
                        </b-col>
                    </b-row>
                    <button type="submit" class="draw justify-content-end">Отправить сообщение</button>
                </form>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feedback"
    }
</script>

<style scoped lang="scss">
    h2{
        padding: 1.5% 0 1% 0 !important;
        text-align: center !important;
    }
    input{
        padding: 25px 10px;
        min-height: 32px;
        margin-bottom: 1%;
    }
    .form-control {
        border: 1px solid #1a3346 !important;
    }
    textarea{
        height: 88% !important;
    }
    p{
        margin-bottom: 0.5rem !important;
    }
    .col{
        padding-bottom: 0.5%;
    }
    .col-4{
        padding: 0 !important;
    }
    button{
        background: radial-gradient(70% 70%, #1f3e57,  #152534);
        border: none !important;
        font-weight: 700;
        color: #ffffff;
        border-radius: 7px;
        display: block;
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        padding: 1% 2%;
        font-size: 1.2rem;
    }
    button:hover{
        background: radial-gradient(70% 70%, #215570,  #152534);
        box-shadow: 7px 7px 7px #696969;
    }
    input:hover, textarea:hover{
        box-shadow: 7px 7px 7px #696969;
    }
    @media screen and (max-width: 500px) {
        input{
            padding: 17px 5px;
            min-height: 28px;
            height: 28px;
        }

        button{
            margin-top: 2%;
            font-size: 1rem;
        }
        .row{
            flex-direction: column;
            .col{
                padding: 0 !important;
            }
            .col-4{
                max-width: 100% !important;
            }
            textarea{
                height: 150px !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        input{
            padding: 17px 5px;
        }
        .row{
            flex-direction: column;
            .col{
                padding: 0 !important;
            }
            .col-4{
                max-width: 100% !important;
            }
            textarea{
                height: 180px !important;
            }
        }
        button{
            margin-top: 2%;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        input{
            padding: 20px 10px;
        }
    }
</style>