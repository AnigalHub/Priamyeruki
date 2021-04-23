<template>
    <div id="mymap">
        <div class="map">
            <iframe :src="address.map" title="адрес_компании_Аваконт"></iframe>
        </div>
    </div>
</template>
<script>
    import address from './../../../public/documents/address.json';
    export default {
        name: "mymap",
        data(){
            return{
                address:address,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>