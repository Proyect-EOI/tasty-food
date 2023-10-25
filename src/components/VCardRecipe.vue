<template>
    <div class="border rounded-lg overflow-hidden shadow-md bg-gray-300 mx-5 max-w-2xl w-72 h-96 flex flex-col">
        <img :src="imageUrl" :alt="name" class="card-image object-cover w-full h-64">
        <div class="flex flex-col justify-between h-full">
            <div>
                <div class="text-sm text-gray-700 -mb-1">{{ category }}</div>
                <div class="text-lg font-bold text-black mt-2 mx-2 line-clamp-2">{{ name }}</div>
            </div>
            <div class="flex flex-col justify-end mt-2">
                <div class="text-sm text-black flex items-center justify-end mb-1">
                    <div class=" bg-yellow-500 text-white px-2 py-1 rounded-lg m-2 lg:mb-0 w-auto">
                        <span class="text-black text-base">⏱️</span>
                        <span class="text-base">{{ preparationTime }} min</span>
                    </div>
                </div>

                <router-link @click="go" :to="'/recipes/' + id"
                    class="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-0 py-1 w-full cursor-pointer transition duration-300">
                    PREPARE
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        imageUrl: String,
        category: String,
        name: String,
        preparationTime: String
    },
    methods: {
        async go() {
            await this.$router.push({
                    path: '/recipes/'+this.id,
                });
            this.$router.go()
        }

    }

}
</script>
