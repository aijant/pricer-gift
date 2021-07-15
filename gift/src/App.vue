<template>
  <div>
    <MainLogo />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from './views/MainFooter'
import MainLogo from './components/MainLogo'

  export default {
    name: 'App',
    components: {
      MainLogo,
      MainFooter
   }
  }
</script>

<style lang="scss"></style>
