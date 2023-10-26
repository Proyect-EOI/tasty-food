<template>
    <div class="md:container md:mx-auto mx-auto my-10 mb-20 bg-gray-100 rounded p-3 px-4 text-center">
        <h2 class="text-xl font-medium mb-2">Lucid Lynx</h2>
        <p>
            "It all starts with an excellent idea and teamwork". We started this project in a web development bootcamp with
            VUE with in EOI, and it became a challenge in which we gained a great experience, personal and mental
            development. I hope you enjoy it as we do!
        </p>
    </div>

    <div class="container mx-auto max-w-3xl">
        <div class="grid grid-cols-3 gap-5">

            <div class="card mb-10 my-card mx-auto bg-white shadow-xl hover:shadow" v-for="dev in devs" :key="dev.github">
                <img class="w-24 mx-auto rounded-full border-8 border-white" :src="dev.avatar" :alt="dev.name">
                <div class="text-center mt-1 text-xl font-medium">{{ dev.name }}</div>
                <div class="text-center mt-2 font-light text-sm">@{{ dev.github }}</div>
                <div class="text-center font-normal text-lg">{{ dev.city }}</div>
                <div class="px-6 text-center mt-2 font-light text-sm">
                    <p>{{ dev.bio }}</p>
                </div>
                <hr class="mt-8">
                <div class="flex p-4">
                    <a target="_blank" rel="noopener referrer" :href="`https://github.com/${dev.github}`"
                        class="w-1/2 text-center">
                        <span class="font-bold"><i class="fa-brands fa-github"></i></span>
                    </a>
                    <div class="w-0 border border-gray-300">

                    </div>
                    <a target="_blank" rel="noopener referrer" :href="`https://linkedin.com/in/${dev.linkedin}`"
                        class="w-1/2 text-center">
                        <span class="font-bold"><i class="fa-brands fa-linkedin"></i></span>
                    </a>
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