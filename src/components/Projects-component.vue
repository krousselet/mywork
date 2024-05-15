<template>
    <swiper-container class="swiper-container"
    :modules="[Navigation, Pagination, Autoplay, Mousewheel]"
    :navigation="true"
    :pagination="{clickable: true}"
    :autoplay="{delay: 2500, disableOnInteraction: false}"
    :mousewheel="true"
    :effect="'coverflow'"
    :grabCursor="true"
    slidesPerView="auto" 
    >
      <swiper-slide v-for="(image, imageProjectIndex) in projectsStore.images" :key="imageProjectIndex" class="swiper-slide">
        <a :href="image.link" :target="'_blank'"><img :src="image.path" :alt="image.alt"></a>
    </swiper-slide>
    </swiper-container>
</template>

<script setup>
import { useProjectsStore } from '@/stores/ProjectsStore';
import { Navigation, Pagination, Autoplay, Mousewheel  } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
const projectsStore = useProjectsStore();
register();
</script>

<style scoped>
.swiper-container {
  width: 60%;
  height: 100%;
  padding: 20px;
  margin-top: 50px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* For Safari */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
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