<template>
    <footer>
      <div id="logos-container">
        <ul>
          <li v-for="(logo, logoIndex) in footerStore.logos" :key="logoIndex">
            <a :href="logo.link" target="_blank">
              <img :src="logo.path" :alt="logo.alt">
            </a>
          </li>
          <li><a :href="cv" download="Kevin_Rousselet_CV.pdf"><img :src="footerStore.cvPath" alt="logo d'un cv"></a></li>
        </ul>
      </div>
    </footer>
  </template>

<script setup>
import { useFooterStore } from '@/stores/FooterStore';
const footerStore = useFooterStore();
const cv = require('@/assets/kevin_rousselet_cv_infomaniak.pdf');
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