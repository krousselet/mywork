import { defineStore } from 'pinia'
export const useFooterStore = defineStore('footerStore', {
    state: () => (
        {
            logos: [
                {
                    path: require('@/assets/logo.png'),
                    alt: 'logo personnel',
                    link: 'http://localhost:8080/',
                },
                {
                    path: require('@/assets/mobile/facebook.svg'),
                    alt: 'logo facebook',
                    link: 'https://www.facebook.com/profile.php?id=100092565411425',
                },
                {
                    path: require('@/assets/mobile/github.svg'),
                    alt: 'logo github',
                    link: 'https://github.com/krousselet',
                },
                {
                    path: '',
                    alt: 'logo cv',
                },
                {
                    path: require('@/assets/mobile/instagram.svg'),
                    alt: 'logo instagram',
                    link: 'https://www.instagram.com/kevin.rousselet/'
                },

            ]
        }
    )
})