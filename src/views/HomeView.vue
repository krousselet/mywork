<template>
  <Home>

  </Home>
</template>

<script>
import Home from '@/components/Home-component.vue';

export default {
  name: 'HomeView',
  components: {
    Home,
  },
};
</script>

<style scoped>
#test-fallback {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
  color: #555;
}
</style>
