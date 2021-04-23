<template>
    <div id="LandingPage">
        <home></home>
        <activity></activity>
        <advantages></advantages>
      <!--  <feedback></feedback> -->
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

</style>