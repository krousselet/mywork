<template>
    <main>
        <div id="title-container">
            <p class="introduction">
                <span v-for="(letter, index) in splitIntroduction" :key="index" class="letter" :style="{ '--i': index }">{{ letter }}</span>
                <span v-for="(dot, dotIndex) in detailsStore.dots" :key="dotIndex" class="dot" :style="{ '--i': dotIndex + splitIntroduction.length }">{{ dot }}</span>
            </p>
        </div>
        <div id="myself">
            <p class="catch">Un petit mot à mon propos</p>
        </div>
    </main>
</template>

<script setup>
import { computed } from 'vue';
import { useDetailsStore } from '@/stores/DetailsStore';

const detailsStore = useDetailsStore();

const splitIntroduction = computed(() => {
    return detailsStore.introduction.split('');
});
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;

    #title-container, #myself {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        overflow-x: hidden;

        .introduction {
            display: flex;
            flex-wrap: wrap;

            .letter, .dot {
                display: inline-block;
                animation: jump 3s forwards;
                animation-delay: calc(0.1s * var(--i));
                font-size: 40px;
            }

            .letter {
                letter-spacing: 6px;
            }

            .dot {
                position: relative;
                top: 100%;
                animation: jump 3s forwards, blink 3s ease-in-out infinite alternate;
                animation-delay: calc(0.1s * var(--i));
            }
        }

        .catch {
            letter-spacing: 7px;
            transform: translateX(-100%);
            opacity: 0;
            animation: translate-x 1s ease forwards;
        }
    }
}

@keyframes jump {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

@keyframes blink {
    0% {
        color: var(--main-color);
    }

    100% {
        color: var(--secondary-color);
    }
}

@keyframes translate-x {
    100% {
        opacity: 1;
        transform: translateX(0);
    }
    
}
</style>
