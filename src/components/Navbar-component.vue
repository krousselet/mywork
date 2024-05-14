<template>
  <header class="bg-body-transparent">
    <nav class="navbar navbar-expand-lg bg-body-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">myself</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse test" id="navbarSupportedContent">
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
.test {
  @media (max-width: 991px) {
    background: rgba(255, 255, 255, 0.1); /* Semi-transparent white background */
    border-radius: 7px;
    position: relative;
    z-index: 10;
    backdrop-filter: blur(10px); /* Blur effect */
    -webkit-backdrop-filter: blur(10px); /* For Safari */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Light border */
    top: 50px;
    margin: 0 auto;
  }
}

header {
    width: 100%;
    height: 50px;

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
        color: black;
        text-transform: capitalize;
        text-decoration: none;
        
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