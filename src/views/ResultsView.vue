<template>
    <div class="container">
        <searchFood class="ml-9" />
        <VListSearchRecipe :searchQuery="searchQuery"></VListSearchRecipe>
    </div>
</template>
<script>
import VListSearchRecipe from '../components/VListSearchRecipe.vue';
import searchFood from '../components/search-food/search-food.vue';

export default {
    components: {
        VListSearchRecipe,
        searchFood
    },
    data() {
        return {
            searchQuery: [],
            inputSearchQuery: ""
        }
    },
    beforeMount() {
        this.searchQuery = JSON.parse(localStorage.getItem("searchQuery"))
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
