<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/materialNavBar.vue";

export default {
  name: 'coachingMaterial',
  components: { NavBar }
}
</script>

<style scoped lang="scss">
.container {
  margin: 48px 0 84px;
}
</style>