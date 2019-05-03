<template>
  <div class="container">
    <AboutBuild></AboutBuild>
  </div>
</template>
<script>

  // @ is an alias to /src
  import AboutBuild from '@/components/AboutBuild.vue'
  export default {
    name: 'About',
    components: {
      AboutBuild,
    }
  }
</script>
