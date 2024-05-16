import { defineStore } from 'pinia'
export const useProjectsStore = defineStore('projectsStore', {
    state: () => (
        {
            images: [
                {
                    path: require('@/assets/mobile/adiscar.webp'),
                    alt: 'le voyage de celui qui jamais n\'oublie',
                    link: 'https://adiscar.netlify.app/#/',
                },
                {
                    path: require('@/assets/mobile/depixelizer.webp'),
                    alt: 'jeu du depixelizer',
                    link: 'https://depixelizer.netlify.app/#/',
                },
                {
                    path: require('@/assets/mobile/vineyard_450x450.webp'),
                    alt: 'Projet php en construction',
                    link: 'https://github.com/krousselet/immo_symfony',
                },
                {
                    path: require('@/assets/mobile/mosaicOne.webp'),
                    alt: 'Projet MovieQuiz en construction',
                    link: 'https://github.com/krousselet/movieQuizVuePinia',
                },
            ]
        }
    )
})