<template>
    <HeaderComponent />
    <div class="container">
        <router-link to="/" />
    </div>
    <RouterView />
    <HomeFooter />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import { RouterLink, RouterView } from 'vue-router'
import HomeFooter from '@/components/HomeFooter.vue';
export default {
    data() {
        return {
        };
    },
    name: "App",
    components: {
        HeaderComponent,
        RouterLink,
        RouterView,
        HomeFooter

    },
};
</script>
<style>
body {
    background-image: url('./assets/img/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(3px);
    background-position: center;
    background-attachment: fixed;
    height: 100%;
    width: 100%;
}
</style>