<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainContent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'Home',
  components: {
    MainContent
  }
}
</script>
