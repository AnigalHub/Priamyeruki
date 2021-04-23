<template>
    <div>
        <h5> {{index + 1}}.{{name_service}}</h5>
        <b-row class="description_row">
            <b-col cols="2">
                <img :src="img_service.imgSrc" :alt="img_service.imgAlt" rel="preload">
            </b-col>
            <b-col class="text">
                {{description_service}}
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Service",
        props:{
            name_service: String,
            description_service: String,
            img_service: Object,
            index:Number,
        },
    }
</script>

<style scoped lang="scss">

</style>