import { defineStore } from 'pinia'
export const useGeneralStore = defineStore('generalStore', {
    state: () => (
        {
            // Solo properties
            activePage: 0,
            isActive: false,
            web: require('@/assets/web.svg'),
            webWide: require('@/assets/web_wide.svg'),
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
            languages: ['Symfony', 'VueJs', 'PHP', 'SQL', 'JavaScript', 'CSS', 'HTML'],
        }
    )
})