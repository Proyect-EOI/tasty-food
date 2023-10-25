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
<style></style>