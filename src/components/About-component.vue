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
            <audio ref="audio" :src="detailsStore.audio"></audio>
            <div class="button-container">
                <button class="btn button" @click="playAudio">Jouer</button>
        <button class="btn button" @click="pauseAudio">Pause</button>
            </div>
        </section>
        <section id="presentation">
            <div class="title-container">
                <h1>KEVIN ROUSSELET</h1>
                <p class="text" v-for="(description, descriptionIndex) in detailsStore.descriptions" :key="descriptionIndex">{{ description }}</p>
            </div>
            <div class="image-container">
                <img :src="detailsStore.myself.path" alt="moi">
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useDetailsStore } from '@/stores/DetailsStore';

const audio = ref(null);

const playAudio = () => {
    if (audio.value) {
        audio.value.play();
    }
};

const pauseAudio = () => {
    if (audio.value) {
        audio.value.pause();
    }
};

const detailsStore = useDetailsStore();

const splitIntroduction = computed(() => {
    return detailsStore.introduction.split('');
});
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    cursor: default;

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
        display: flex;
        flex-direction: column;

        .button-container {
            display: flex;
            width: 250px;
            justify-content: space-around;
            align-items: center;
            margin: 0 auto;
            overflow-y: hidden;
            @media (min-width: 991px) and (max-width: 1499px) {
                    width: 75%;
                }
            @media (min-width: 1499px) and (max-width: 3080px) {
                width: 100%;
            }

            button {
                @media (min-width: 991px) and (max-width: 1499px) {
                    width: 150px;
                    height: 50px;
                    margin: 0 25px;
                }
                @media (min-width: 1499px) and (max-width: 3080px) {
                    width: 275px;
                    height: 125px;
                    margin: 0 50px;
                }
            }
        }
    }

    #presentation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 16px;
        margin-top: 75px;
        @media (min-width: 991px) {
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            margin: 75px auto;
        }
        @media (min-width: 991px) and (max-width: 1499px) {
            font-size: 30px;
        }
        @media (min-width: 1500px) and (max-width: 3048px) {
            font-size: 40px;
        }
        .title-container {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin: 0 25px;
            text-align: center;

            h1 {
                margin: 50px auto;
            }

            .text {
                text-align: justify;
                text-wrap: balance ;
                margin: 25px auto;
                @media (min-width: 991px) {
                    @for $i from 1 through 2 {
                        &:nth-of-type(2n + #{$i - 1}) {
                        text-align: if($i == 1, left, right);
                        }
                    }
                    width: 60%;
                    height: 60%;
                    margin: 25px auto;
                }
            }
        }

        .image-container {
            width: 50%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 7px;
            margin-top: 75px;
            margin: 75px 25px 0 25px;
            

            img {
                width: inherit;
                height: inherit;
                border-radius: 25%;
            }
        }
    }
}
</style>
