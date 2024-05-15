<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>

</template>

<script>
import Navbar from '@/components/Navbar-component'
import Footer from '@/components/Footer-component'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
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
  font-family: "Anton", sans-serif;
  letter-spacing: 3px;
  font-size: 28px;
  transition: .3s ease;
}

main {
  min-height: 650px;
  @media (min-width: 991px) {
    min-height: 100vh;
    
  }
  display: flex;
  justify-content: center;
  align-items: center;
}

//LISTS
ul {
  list-style: none;
}

@keyframes scroll {
  100% {
    transform: translateX(-25%);
  }
}
// STATES + PSEUDOS ELEMENTS
:focus {
  border: none;
  box-shadow: 5px 5px var(--main-secondary-color);
  border-bottom: 1px solid var(--secondary-color);
  transition: .3s ease;
  border-radius: 7px;
}

//GENERAL CLASSES
.button {
  font-size: 28px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(var(--secondary-color), rgba(131, 3, 163, 0.349));
  opacity: 0;
  transform: translateY(150px);
  animation: translate-y 1s ease forwards;

  &:active {
    background:var(--secondary-color) !important;
    scale: .9;
    transition: .1s ease;
  }
}

//KEYFRAMES
@keyframes jump {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
        letter-spacing: 6px;
    }
    60% {
        transform: translateY(-15px);
        letter-spacing: 3px;
    }
}

@keyframes blink {
    0% {
        color: var(--main-color);
    }

    100% {
        color: var(--secondary-color);
    }
}

@keyframes translate-x {
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes translate-y {
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes test {
  25% {
    transform: rotate(-25deg) translateY(70%);
            }
  50% {
    transform: rotate(0) translateY(40%);
            }
  75% {
    transform: rotate(25deg) translateY(10%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>
