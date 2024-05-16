<template>
    <main id="home" class="container-fluid">
        <Suspense>
      <template #default>
        <Landing />
      </template>
      <template #fallback>
        <div id="test-fallback">
          <p>Chargement...</p>
        </div>
      </template>
    </Suspense>
        <div id="list-container">
            <ul class="scrolling-list">
            <li v-for="(language, languageIndex) in generalStore.languages" :key="languageIndex">
                {{ language }}
            </li>
            <li v-for="(language, languageIndex) in generalStore.languages" :key="'duplicate-' + languageIndex">
                {{ language }}
            </li>
            </ul>
        </div>
    </main>
</template>
<script setup>
import { useGeneralStore } from '@/stores/GeneralStore'
import Landing from '@/components/Landing-component.vue';
const generalStore = useGeneralStore();

</script>
<style lang="scss" scoped>
#home {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;


    #list-container {
        width: 105%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 75px;
        overflow: hidden;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.1);
        position: relative;
        z-index: 10;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        margin: 125px;
        cursor: default;

        .scrolling-list {
            display: flex;
            flex-direction: row;
            animation: scroll 10s linear infinite alternate;
            margin: 0;
            padding: 0;
            list-style: none;

            li {
            display: flex;
            color: var(--secondary-color);
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            height: 60px;
            white-space: nowrap; /* Prevent line breaks */
            }
        }
    }

    @media (min-width: 991px) {
        #test {
            height: 1000px;
        }
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(20%);
    }
}
</style>