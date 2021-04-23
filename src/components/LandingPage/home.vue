<template>
    <div id="home" rel="preload">
        <div id="background">
            <b-container>
                <div class="description">Изготовление разнообразного декора, рекламных вывесок, сувенирной продукции, реставрация, брендирование</div>
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

</style>