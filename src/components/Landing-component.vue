<template>
    <div id="test">
        <div>
            <img :src="generalStore.web" alt="image d'un monde numérique" 
            :srcset="`${generalStore.webWide} 1920w, ${generalStore.web} 1024w`"
            sizes="(min-width: 1024px) 1920px, 100vw">
        </div>
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
        width: 100%;
        height: 500px;
        margin-top: 75px;

        div {
            position: absolute;
            width: 1024px;
            height: 100%;
            left: 50%;
            top: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(-50%, -50%);
            @media (min-width: 320px) and (max-width: 991px) {
                box-shadow: 5px 5px 10px var(--main-secondary-color);
            }

            img {
                width: 1024px;
                height: auto;
                transform: translateY(100%);
                opacity: 0;
                border-radius: 7px;
                animation: test 3.5s ease-in-out forwards;
            }
        }
    }
</style>