<template>
    <main id="home" class="container-fluid">
        <div id="test">
            <div>
                <img :src="generalStore.web" 
                :srcset="`${generalStore.webWide} 1920w, ${generalStore.web} 1024w`"
                sizes="(min-width: 1024px) 1920px, 100vw">
            </div>
        </div>
        <div id="list-container">
            <ul class="scrolling-list">
                <li v-for="(language, languageIndex) in generalStore.languages" :key="languageIndex">{{ language }}</li>
                <li v-for="(language, languageIndex) in generalStore.languages" :key="'duplicate-' + languageIndex">{{ language }}</li>
            </ul>
    </div>
    </main>
</template>
<script setup>
import { useGeneralStore } from '@/stores/GeneralStore'
const generalStore = useGeneralStore();

</script>
<style lang="scss" scoped>
#home {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;

    #test {
        position: relative;
        transform: rotate(3deg);
        width: 100%;
        height: 500px;
        margin-top: 75px;
        box-shadow: inset 5px white;

        div {
            position: absolute;
            width: 130%;
            height: 100%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            transition: background-color .5s ease;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: auto;
                transition: transform .5s ease, opacity .5s ease;
                transform: translateY(100%);
                opacity: 0;
                border-radius: 7px;
            }

            &:hover {
                background: linear-gradient(#417f981c, #5eb4c827);
                img {
                    transform: translateY(0);
                    opacity: 1;
                }
                transition: all .5s ease;
                box-shadow: 5px 5px 10px black;
            }
        }
    }

    #list-container {
        width: 105%;
        height: 60px;
        background-color: #323232;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 75px;
        overflow: hidden;
        border-radius: 7px;
        background: transparent;

        .scrolling-list {
            display: flex;
            flex-direction: row;
            animation: scroll 10s linear infinite alternate;

            li {
                display: flex;
                color: var(--secondary-color);
                list-style: none;
                align-items: center;
                justify-content: center;
                padding: 0 40px;
                height: 60px;
            }
        }
    }

    @media (min-width: 991px) {
        #test {
            height: 1000px;
            div:hover {
                background: linear-gradient(#418098, #5EB5C8);
            }
        }
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>