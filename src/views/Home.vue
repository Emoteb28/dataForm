<template>
  <div class="container">
    <AboutBuild></AboutBuild>
  </div>
</template>
<script>

  // @ is an alias to /src
  import AboutBuild  from '@/components/AboutBuild.vue'
  import About from "./About";
  export default {
    name: 'Home',
    components: {
      About,
      AboutBuild,
    }
  }
</script>
