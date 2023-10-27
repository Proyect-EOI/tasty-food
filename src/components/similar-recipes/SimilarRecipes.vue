<template>
    <div class=" bg-gray-200 bg-opacity-70 mb-6 w-5/6 rounded-lg">
        <h2 class="text-center font-bold text-xl my-4">SIMILAR RECIPES</h2>
        <div class="shadow-md flex flex-wrap justify-center">
            <ListSimilarRecipes></ListSimilarRecipes>
        </div>
    </div>
</template>

<script>
import ListSimilarRecipes from './ListSimilarRecipes.vue';

export default {
    components: {
        ListSimilarRecipes,
    },
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    beforeCreate() {
    },
    methods: {

    }
}
</script>

<style scoped></style>
