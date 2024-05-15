import { defineStore } from 'pinia'
export const useProjectsStore = defineStore('projectsStore', {
    state: () => (
        {
            images: [
                {
                    path: require('@/assets/mobile/adiscar.svg'),
                    alt: 'le voyage de celui qui jamais n\'oublie',
                    link: 'https://adiscar.netlify.app/#/',
                },
                {
                    path: require('@/assets/mobile/depixelizer.svg'),
                    alt: 'jeu du depixelizer',
                    link: 'https://depixelizer.netlify.app/#/',
                },
                {
                    path: '#',
                    alt: 'Projet php en construction',
                    link: '',
                },
                {
                    path: '#',
                    alt: 'Projet MovieQuiz en construction',
                    link: '',
                },
            ]
        }
    )
})