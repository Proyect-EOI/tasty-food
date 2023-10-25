<template>
    <div class="container">
        <div class="m-6">
            <searchFood class="ml-9" />
            <VListSearchRecipe :searchQuery="searchQuery"></VListSearchRecipe>
        </div>
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
</style>
