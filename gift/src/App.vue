<template>
  <div>
  <MainContent />
  <Footer />
  </div>
</template>

<script>
import MainContent from './components/MainContent'
import Footer from './views/Footer'
  export default {
    name: 'App',
    components: {
      MainContent,
      Footer
   },
    data: () => ({}),
  }
</script>

<style lang="scss">
</style>
