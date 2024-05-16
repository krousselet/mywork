<template>
  <Home>
      <Suspense>
        <template #default>
          <Landing></Landing>
        </template>
        <template #fallback>
        <div id="test">
            <p>test</p>
        </div>
</template>
    </Suspense>
  </Home>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home-component.vue'
import Landing from '@/components/Landing-component.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    Landing,
  }
}
</script>
