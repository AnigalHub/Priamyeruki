<template>
    <div id="feedback">
        <div id="background">
            <b-container>
                <h2 class="h2_light">Обратная связь</h2>
                <form name="sentMessage" id="Form"  @submit.prevent="SendFeedback">
                    <b-row>
                        <b-col cols="4">
                            <label class="text_night" for="name">Ваше имя:</label>
                            <input v-model="feedback.name" type="text" class="form-control" placeholder="ФИО" id="name" name="name" required="" data-validation-required-message="Пожалуйста, введите Ваше имя">
                            <label class="text_night" for="phone">Ваше телефон:</label>
                            <input v-model="feedback.phone" type="tel" class="form-control" placeholder="+7(xxx)xxx-xx-xx" pattern="+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" id="phone" name="phone" required="" data-validation-required-message="Пожалуйста, введите Номер телефона">
                            <label class="text_night" for="mail">Ваш E-mail:</label>
                            <input v-model="feedback.email" type="email" class="form-control" placeholder="Электронная почта" id="mail" name="mail" required="" data-validation-required-message="Пожалуйста, введите Ваш электронный адрес">
                        </b-col>
                        <b-col>
                            <label class="text_night" for="message">Ваше сообщение:</label>
                            <textarea v-model="feedback.message" class="form-control" placeholder="Опишите ваш запрос" id="message" name="message" required="" data-validation-required-message="Пожалуйста, введите сообщение"></textarea>
                        </b-col>
                    </b-row>
                    <button type="submit" class="draw justify-content-end">Отправить сообщение</button>
                </form>
            </b-container>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cfg from './../../../public/documents/cfg.json'
    export default {
        name: "feedback",
        data(){
            return {
                feedback:{
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                }
            }
        },
        methods:{
            SendFeedback(){
                const url = `${cfg.feedbackUrl}SendFeedback`;
                axios.post(url, this.feedback)
                    .then(resp => {
                        alert(resp.data)
                    })
                    .catch(error => {
                        alert(error)
                    })
                //axios.get(url).then(resp => { alert(resp.data)}).catch(error => { console.log(error) })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>