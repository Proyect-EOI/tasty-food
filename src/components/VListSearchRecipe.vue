<template>
    <div class="max-w-max mb-10 p-5 bg-gray-200 bg-opacity-70 w-5/6 rounded-lg ">
        <div class="recipe-list flex justify-center flex-wrap gap-6 mb-6 ">
            <VCardRecipe v-for=" recipe  in  infoRecipeComplete " :key="recipe.id" :id="String(recipe.id)"
                :imageUrl="recipe.image" :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from './VCardRecipe.vue';


export default {
    data() {
        return {
            image: '',
            recipes: [],
            selectedCategory: 'FindByRecipie',
            infoRecipeComplete: []
        };
    },
    components: {
        VCardRecipe,
    },

    async mounted() {
        this.selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"))
        this.recipes = await this.findRecipes();
        this.infoRecipeComplete = this.getRecipesInfo(this.recipes)
    },
    methods: {

        async findRecipes() {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecepies = "";
            let result = [];
            let objeto = {};

            switch (this.selectedCategory) {
                case 'FindByRecipie':
                    if (this.searchQuery) { // Verifica si searchQuery tiene un valor
                        urlRecepies = `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchQuery}&apiKey=${apiKey}`;
                        await fetch(urlRecepies)
                            .then(response => response.json())
                            //recorro el array resultado, lo meto en un objeto para dejarlo más limpio y lo meto en un array que luego devuelvo 
                            .then(results => results.results.forEach(element => {
                                objeto = { "id": element.id, "title": element.title, "image": element.image };
                                result.push(objeto);
                            }));
                    }
                    break;
                //si seleccionado es por ingrediente    
                case 'FindByIngredient':
                    if (this.searchQuery) { // Verifica si searchQuery tiene un valor
                        urlRecepies = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.searchQuery}&apiKey=${apiKey}`;
                        await fetch(urlRecepies)
                            .then(response => response.json())
                            //recorro el array resultado, lo meto en un objeto para dejarlo más limpio y lo meto en un array que luego devuelvo 
                            .then(results => results.forEach(element => {
                                result.push(element);
                            }));
                    }
                    break;
                case 'cuisine':
                    if (this.searchQuery) {
                        const apiKey = import.meta.env.VITE_API_KEY;
                        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${this.searchQuery}`;

                        await fetch(url)
                            .then((response) => response.json())
                            .then((results) => {
                                results.results.forEach(element => {
                                    result.push(element);
                                })
                            });
                    }
            }
            return result
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
    props: {
        searchQuery: String,
    },
};
</script>

  