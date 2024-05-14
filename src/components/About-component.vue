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
        <section id="music">
            <div class="button-container">
                <button class="btn">Jouer</button>
                <button class="btn">Pause</button>
            </div>
        </section>
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
        height: 150px;
        @media (min-width:992px) {
            margin-top: 75px;
            height: 250px;
        }

        .introduction {
            display: flex;
            flex-wrap: wrap;

            .letter, .dot {
                display: inline-block;
                animation: jump 3s forwards;
                animation-delay: calc(0.1s * var(--i));

                @media (min-width: 320px) and (max-width: 991px) {
                    font-size: 48px;
                    letter-spacing: 6px;
                }

                @media (min-width: 992px) {
                    font-size: 150px;
                    letter-spacing: 24px;
                }
            }

            .letter {
                @media (min-width: 320px) and (max-width: 991px) {
                    font-size: 48px;
                    letter-spacing: 6px;
                }

                @media (min-width: 992px) {
                    font-size: 150px;
                    letter-spacing: 24px;
                }
            }

            .dot {
                position: relative;
                top: 100%;
                animation: jump 3s forwards, blink 3s ease-in-out infinite alternate;
                animation-delay: calc(0.1s * var(--i));
            }
        }

        .catch {
            opacity: 0;
            animation: translate-x 1s ease forwards;
            @media (min-width: 320px) and (max-width: 991px) {
                letter-spacing: 3px;
                transform: translateX(-100%);
            }
            @media (min-width: 992px) {
                letter-spacing: 3px;
                transform: translateX(-100%);
                font-size: 60px;
            }
        }
    }

    #music {

        .button-container {
            display: flex;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            margin: 0 auto;
            overflow-y: hidden;

            button {
                font-size: 28px;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border: 1px solid var(--secondary-color);
                background: linear-gradient(var(--secondary-color), rgba(131, 3, 163, 0.349));
                opacity: 0;
                transform: translateY(150px);
                animation: translate-y 1s ease forwards
            }
        }
    }
}

@keyframes jump {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
        letter-spacing: 6px;
    }
    60% {
        transform: translateY(-15px);
        letter-spacing: 3px;
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

@keyframes translate-y {
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
