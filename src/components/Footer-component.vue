<template>
    <footer>
      <div id="logos-container">
        <ul>
          <li v-for="(logo, logoIndex) in footerStore.logos" :key="logoIndex">
            <a :href="logo.link" target="_blank">
              <img :src="logo.path" :alt="logo.alt">
            </a>
          </li>
          <li><a href="/kevin_rousselet_cv_infomaniak.pdf" download="kevin_rousselet_cv_infomaniak.pdf">
            <img :src="footerStore.cvPath" alt="Download CV"></a></li>
        </ul>
      </div>
    </footer>
  </template>

<script setup>
import { useFooterStore } from '@/stores/FooterStore';
const footerStore = useFooterStore();
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    font-size: 16px;
    margin-top: 75px;

    #logos-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: inherit;
        height: 50px;

        ul {
            display: flex;
            width: inherit;
            justify-content: space-around;

            li {
                width: inherit;
                overflow: hidden;

                img {
                  width: 50px;
                  height: 50px;
                }
            }
        }
    }
}

img {
  transition: .3s;
}

img:hover {
  @media (min-width: 991px) {
    transition: .3s;
    transform: rotate(360deg);
  }
}
</style>