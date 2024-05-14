<template>
  <header class="bg-body-transparent">
    <nav class="navbar navbar-expand-lg bg-body-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">myself</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(page, pageIndex) in generalStore.pages" :key="pageIndex">
              <router-link :to="page.path">{{ page.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';
const generalStore = useGeneralStore();
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 50px;
    position: relative;
    z-index: 10;

    nav {
      width: 100%;
      display: flex;
      justify-content: space-around;

      ul {
        width: 80%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        align-items: center;


        li {
          width: 100%;

          a {
        font-weight: bold;
        color: var(--main-secondary-color);
        text-transform: capitalize;
        
        @media (min-width: 320px) and (max-width: 991px) {
          & {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
          }
        }
        &.router-link-exact-active {
          color: var(--secondary-color);
        }
      }
        }
      }
    }
  }
</style>