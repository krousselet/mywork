import { defineStore } from 'pinia'
export const useDetailsStore = defineStore('detailsStore', {
    state: () => (
        {
            // Solo properties
            introduction: 'Bonjour',
            dots: ['.', '.', '.'],
        }
    )
})