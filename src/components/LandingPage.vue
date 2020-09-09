<template>
    <div>
        <home></home>
        <activity></activity>
        <advantages></advantages>
        <feedback></feedback>
        <mymap></mymap>
    </div>
</template>
<script>
    import Activity from "./LandingPage/catalog"
    import Advantages from "./LandingPage/advantages"
    import Feedback from "./LandingPage/feedback"
    import Home from "./LandingPage/home"
    import Mymap from "./LandingPage/mymap"

    export default {
        name: 'LandingPage',
        components: {Activity, Advantages, Feedback, Home, Mymap}
    }
</script>
<style lang="scss">
    #activity,#feedback{
        padding: 1.5% 0 2.5% 0;
    }
    img {
        width: 100%;
    }
    h2 {
        font-weight: 700 !important;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.74);
        color: #152534;
    }
    h4 {
        text-align: center;
    }
    h5 {
        font-weight: 700 !important;
    }
</style>