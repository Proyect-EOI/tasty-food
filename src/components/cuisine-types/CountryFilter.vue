<template>
    <div class="bg-gray-200 bg-opacity-70 mx-auto lg:mt-5 w-5/6 shadow-lg p-10 pt-1 rounded-lg">
        <h2 class="text-2xl font-bold mb-6 text-center">Choose your cuisine type</h2>
        <div class="carousel">
            <div class="card" v-for="(cuisine, index) in cuisinesTypes" :key="index">
                <CountryCard :cuisine="cuisine" />
            </div>
        </div>
    </div>
</template>


<script>
import CountryCard from './CountryCard.vue';

export default {
    name: 'CountryFilter',
    components: { CountryCard },
    data() {
        return {
            cuisine: '',
            cuisinesTypes: ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
            ]
        };
    },
    mounted() {
        const carousel = document.querySelector('.carousel');
        let position = 0;

        setInterval(() => {
            position += 210;
            if (position >= carousel.scrollWidth) {
                position = 0;
            }

            carousel.scrollTo({
                left: position,
                behavior: 'smooth',
            });
        }, 3000);
    },
};
</script>


<style scoped>
.carousel {
    display: flex;
    overflow: hidden;
    width: 100%;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    white-space: nowrap;
}

.card {
    flex: 0 0 auto;
    width: 200px;
    height: auto;
    margin-right: 10px;
    scroll-snap-align: start;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: center;
    margin: 20px 0;
}
</style>
