<template>
  <Navbar></Navbar>
  <router-view />

</template>

<script>
import Navbar from '@/components/Navbar-component'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">

// VARIABLES
:root {
  --main-color: #418098;
  --main-secondary-color: #5EB5C8;
  --secondary-color: #c22a85;
}

//SCROLLBARS
::-webkit-scrollbar {
  width: 7px; /*  VERTICAL SCROLLBAR */
  height: 7px;
}

/* Customize the scrollbar track */
::-webkit-scrollbar-track {
  background: var(--main-color); //COLOR OF THE OUTER BAR
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background: var(--secondary-color); /* COLOR OF THE THUMB */
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--main-secondary-color); /* THUMB HOVER */
}

//BODY
body {
  background: linear-gradient(var(--main-color), var(--main-secondary-color));
  transition: all .5s ease;
  background-repeat: no-repeat;
}

@keyframes scroll {
    100% {
        transform: translateX(-25%);
    }
}
</style>
