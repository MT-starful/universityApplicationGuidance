<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/newsNavBar.vue";

export default {
  name: 'officialNews',
  components: { NavBar }
}
</script>

<style scoped lang="scss">
.container {
  margin: 48px 0 84px;
}
</style>