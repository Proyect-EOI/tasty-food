<template>
    <div class="flex justify-center">
        <div class="my-10 mb-20 bg-gray-100 rounded p-3 px-4 text-center w-5/6">
            <h2 class="text-xl font-medium mb-2">Lucid Lynx</h2>
            <p>
                "It all starts with an excellent idea and teamwork". We started this project in a web development
                bootcamp
                with
                VUE with in EOI, and it became a challenge in which we gained a great experience, personal and mental
                development. I hope you enjoy it as we do!
            </p>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="w-5/6 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            <div class="card bg-white shadow-xl hover:shadow rounded-lg flex flex-col justify-between" v-for="dev in devs"
                :key="dev.github">
                <img class="object-contain mt-3 w-24 max-h-24 mx-auto rounded-full border-8 border-white" :src="dev.avatar"
                    :alt="dev.name">
                <div class="text-center mt-1 text-xl font-medium">{{ dev.name }}</div>
                <div class="text-center mt-2 font-light text-sm">@{{ dev.github }}</div>
                <div class="text-center font-normal text-lg">{{ dev.city }}</div>
                <div class="text-center mt-2 font-light text-sm px-4">
                    <p>{{ dev.bio }}</p>
                </div>
                <div class="flex bg-gray-100 rounded-b-lg h-10 mt-8">
                    <button class="w-1/2">
                        <a target="_blank" rel="noopener referrer" :href="`https://github.com/${dev.github}`"
                            class="h-full w-full flex items-center justify-center">
                            <span class="font-bold"><i class="fa-brands fa-github"></i></span>
                        </a>
                    </button>
                    <div class="w-0 h-min-fit border border-gray-300"></div>
                    <button class="w-1/2">
                        <a target="_blank" rel="noopener referrer" :href="`https://linkedin.com/in/${dev.linkedin}`"
                            class="h-full w-full flex items-center justify-center">
                            <span class="font-bold"><i class="fa-brands fa-linkedin"></i></span>
                        </a>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import devsData from '../assets/data/devs.json'

export default {
    data() {
        return {
            devs: devsData
        }
    }
}

</script>

<style scoped></style>