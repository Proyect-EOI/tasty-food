<template >
    <div class="container">
        <div class="buscador search transparent p-5">
            <h1 class="mt-2 flex justify-center text-2xl mb-8 font-bold">Hundred of recipes</h1>
            <div class="flex justify-center">
                <SearchFood />
            </div>
        </div>

        <HomeRecomended></HomeRecomended>

        <CountryFilter />

        <RecipeCategories />
    </div>
</template>
<script>
import SearchFood from "../components/search-food/search-food.vue";
import CountryFilter from '../components/cuisine-types/CountryFilter.vue'
import RecipeCategories from '../components/categories/RecipeCategories.vue'
import HomeRecomended from '../components/HomeRecomended.vue'


export default {
    components: {
        SearchFood,
        CountryFilter,
        RecipeCategories,
        HomeRecomended

    },
    data() {
        return {
            id: 1
        }
    },
}
</script>
<style>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

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