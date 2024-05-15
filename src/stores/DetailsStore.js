import { defineStore } from 'pinia'
export const useDetailsStore = defineStore('detailsStore', {
    state: () => (
        {
            // Solo properties
            introduction: 'Bonjour',
            dots: ['.', '.', '.'],
            myself: {
                path: require('@/assets/myself.png'),
                alt: 'Photo du développeur'
            },
            descriptions: {
                paragraphOne: 'Je suis un développeur junior, à la recherche d\'un emploi, dans le but de solidifier mes connaissances.',
                paragraphTwo: 'Mais avant tout, je suis un artiste. J\'écris, je fais du piano, et j\'aime aussi la photographie et les langues.',
                paragraphThree: 'Si la vie est un éternel apprentissage, il en va de même pour le développement web. Il faut savoir rester curieux de tout, et pratiquer souvent !'
            }
        }
    )
})