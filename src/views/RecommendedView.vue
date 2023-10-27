<template>
    <div class="container">
        <AllRecomended></AllRecomended>
    </div>
</template>

<script>
import AllRecomended from '../components/AllRecomended.vue';
export default {
    components: {
        AllRecomended
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1600px;
    gap: 2rem;

}
</style>