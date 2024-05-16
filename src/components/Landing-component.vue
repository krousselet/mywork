<template>
    <div id="test">
        
            <img :lazy="true" :src="generalStore.web" alt="image d'un monde numérique" 
            :srcset="`${generalStore.webWide} 1920w, ${generalStore.web} 1024w`"
            sizes="(min-width: 1024px) 1920px, 100vw">
        
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/GeneralStore'
const generalStore = useGeneralStore();
</script>

<style lang="scss" scoped>
#test {
    position: relative;
    transform: rotate(3deg);
    margin-top: 75px;
    overflow: hidden;
    border-radius: 7px;
        @media (min-width: 320px) and (max-width: 991px) {
            width: 300px;
            height: 300px;  
        }
        @media (min-width: 991px) {
            width: 1024px;
            height: 500px;  
        }
        img {
            width: inherit;
            height: inherit;
            transform: translateY(100%);
            opacity: 0;
            border-radius: 7px;
            animation: test 3.5s ease-in-out forwards;
            aspect-ratio: 1 1;
            }
        }
</style>