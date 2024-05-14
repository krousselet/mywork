<template>
    <swiper-container class="swiper-container">
      <swiper-slide v-for="(image, imageProjectIndex) in projectsStore.images" :key="imageProjectIndex" class="swiper-slide">
        <a :href="image.link" :target="'_blank'"><img :src="image.path"></a>
    </swiper-slide>
    </swiper-container>
</template>

<script setup>
import { useProjectsStore } from '@/stores/ProjectsStore';
import { register } from 'swiper/element/bundle';
const projectsStore = useProjectsStore();
register();
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 50px;
  @media (min-width: 991px) {
    width: 80%;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  border-radius: 10px; /* Rounded corners */
  backdrop-filter: blur(5px); /* Slight blur effect */
  -webkit-backdrop-filter: blur(5px); /* For Safari */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Light border */
  height: 300px;

  @media (min-width: 991px) {
    width: 80%;
  }
}

.swiper-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px; /* Rounded corners for images */
}
</style>