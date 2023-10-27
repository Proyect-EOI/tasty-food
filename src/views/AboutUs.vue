<template>
    <div
        class="md:container md:mx-auto mx-auto shadow-lg hover:shadow my-10 mb-20 bg-gray-100 rounded p-6 px-4 text-center">
        <h2 class="text-xl font-medium mb-2">Lucid Lynx</h2>
        <p>
            "It all starts with an excellent idea and teamwork". We started this project in a web development bootcamp with
            VUE with in EOI, and it became a challenge in which we gained a great experience, personal and mental
            development. I hope you enjoy it as we do!</p>
    </div>


    <div class="container mx-auto max-w-4xl">
        <div class="grid grid-cols-3 gap-5">

            <div class="card mb-10 my-card mx-auto bg-white shadow-xl hover:shadow rounded-lg" v-for="dev in devs"
                :key="dev.github">
                <img class="w-24 mx-auto rounded-full border-8 border-white" :src="dev.avatar" alt="">
                <div class="text-center mt-1 text-xl font-medium">{{ dev.name }}</div>
                <div class="text-center mt-2 font-light text-sm">@{{ dev.github }}</div>
                <div class="text-center font-normal text-lg">{{ dev.city }}</div>
                <div class="px-6 text-center mt-2 font-light text-sm">
                    <p v-text="dev.bio" />
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
import barbaraAvatar from '../assets/img/barbara.jpeg'
import guillermoAvatar from '../assets/img/guillermo.jpeg'
import hilarioAvatar from '../assets/img/hilario.jpg'
import ignacioAvatar from '../assets/img/ignacio.jpeg'
import ivanAvatar from '../assets/img/ivan.png'

export default {
    data() {
        return {
            devs: [
                {
                    avatar: barbaraAvatar,
                    name: 'Bárbara Flores',
                    github: 'bflores96',
                    linkedin: 'barbara-flores-aranda',
                    city: 'Málaga',
                    bio: 'Front end Developer. I like to play video games, read, go to the gym and spend time with my family.'
                },
                {
                    avatar: guillermoAvatar,
                    name: 'Guillermo Escudero',
                    github: 'gjescuderoamodeo',
                    linkedin: 'guillermo-josé-escudero-amodeo',
                    city: 'Sevilla',
                    bio: 'Web and multiplatform developer. I am passionate about programming because I love creating new and useful things with just a computer and my imagination.'
                },
                {
                    avatar: hilarioAvatar,
                    name: 'Hilario Pérez',
                    github: 'hilarioperez18',
                    linkedin: 'hilarioperez',
                    city: 'Madrid',
                    bio: "Full Stack Developer.I'm a positive person, I'm a lover of technology, I like to help people, I like the guitar."
                },
                {
                    avatar: barbaraAvatar,
                    name: 'David González',
                    github: 'gonzsanz',
                    linkedin: 'davidgonzalezsanzz',
                    city: 'Málaga',
                    bio: 'Passionate about technology and programming, Fullstack Developer, I have a strong professional background and a wide range of interests ranging from fitness to creating personal projects.'
                },
                {
                    avatar: ignacioAvatar,
                    name: 'Ignacio Barbeyto',
                    github: 'IgnacioBar',
                    linkedin: 'ignaciobarmad',
                    city: 'Madrid',
                    bio: 'Full stack developer. I enjoy football and playing video games. In my free time, I hang out with my friends and family.'
                },
                {
                    avatar: ivanAvatar,
                    name: 'Iván Martínez',
                    github: 'ivanmartinezd',
                    linkedin: 'ivan-martinez-de-la-torre',
                    city: 'Málaga',
                    bio: 'Fullstack Developer. I love doing sports after a long day sitting at the computer, relating to people and read interesting things.'
                },

            ]
        }
    }
}
</script>


<style></style>
