<template>
    <section class="bg-gray-100 p-5 text-center">
        <h2 class="text-2xl font-bold mb-6">Our recommendations</h2>
        <div class="flex justify-around flex-wrap">
            <VCardRecipe v-for=" recipe  in  infoRecipeComplete " :key="recipe.id" :id="String(recipe.id)"
                :imageUrl="recipe.image" :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </section>
</template>

<script>
import VCardRecipe from './VCardRecipe.vue';

export default {
    data() {
        return {
            id: 1,
            recipes: [],
            infoRecipeComplete: []
        }
    },
    components: {
        VCardRecipe,
    },
    async beforeMount() {
        this.recipes = await this.getRecommend();
        this.infoRecipeComplete = await this.getRecipesInfo(this.recipes)
    },
    methods: {
        async getRecommend() {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecipes = `https://api.spoonacular.com/recipes/complexSearch?number=4&sort=random&apiKey=${apiKey}`;
            let recommendRecipes = []

            await fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    recommendRecipes = recipe.results;
                })

            return await recommendRecipes;
        },
        getRecipesInfo(recipes) {
            const idList = recipes.map((recipe) => recipe.id);
            const apiKey = import.meta.env.VITE_API_KEY;
            const promiseList = [];
            const promises = []
            idList.forEach(id => {
                const request = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
                promiseList.push(request);
            })
            promiseList.forEach(element => {
                const promise = fetch(element)
                promises.push(promise)
            });
            Promise.all(promises)
                .then((responses) => Promise.all(responses.map((response) => response.json()))
                    .then((recipes) => {
                        this.infoRecipeComplete = recipes.map((recipe) => {
                            return {
                                id: recipe.id,
                                image: recipe.image,
                                title: recipe.title,
                                readyInMinutes: recipe.readyInMinutes
                            }
                        })
                    })
                )

        },
    },

}
</script>

<style lang="scss" scoped></style>