<template>
    <div class="bg-gray-200 bg-opacity-70 mx-auto lg:mt-5 w-5/6 shadow-lg p-10 pt-5 m-10 rounded-lg">
        <h2 class="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button
                class="p-4 text-xs sm:text-base md:text-lg lg:text-xl bg-blue-500 font-bold text-white rounded transform transition-transform duration-300 ease-in-out focus:outline-none hover:scale-105 hover:bg-blue-600"
                @click="findCategories(ingredient)" v-for="(ingredient, index) in recipeCategories" :key="index">
                {{ ingredient }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecipeCategories",
    data() {
        return {
            recipeCategories: ["MEAT", "FISH", "VEGETABLES", "PASTA", "RICE", "EGGS", "JAM", "DESSERT", "CHICKEN", "BREAKFAST", "DINNER", "SEAFOOD"],
            recipes: [],
            selectedCategory: "FindByIngredient"
        }
    },
    methods: {
        async findCategories(categoria) {
            localStorage.setItem("selectedCategory", JSON.stringify(this.selectedCategory));
            localStorage.setItem("searchQuery", JSON.stringify(categoria));
            this.$router.push({
                name: 'results',
            });
        }
    }
}
</script>

<style scoped></style>