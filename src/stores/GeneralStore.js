import { defineStore } from 'pinia'
export const useGeneralStore = defineStore('generalStore', {
    state: () => (
        {
            // Solo properties
            activePage: 0,
            isActive: false,
            web: require('@/assets/web.webp'),
            webWide: require('@/assets/web_wide.webp'),
            // Navigation Data
            pages: [
                //HOME
                {
                    label: 'home',
                    path: '/',
                },
                //ABOUT
                {
                    label: 'details',
                    path: '/about',
                },
                //PROJECTS
                {
                    label: 'projets',
                    path: '/projects',
                },
                //CONTACT
                {
                    label: 'contacter',
                    path: '/contact',
                    catch: 'me contacter'
                },
            ],
            languages: ['Git', 'Trello', 'Symfony', 'VueJs', 'PHP', 'SQL', 'JavaScript', 'CSS', 'HTML'],
        }
    )
})