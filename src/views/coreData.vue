<template>
  <NavBar />
  <div class="container">
    <el-backtop :right="20" :bottom="80" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/views/data/navBar.vue";

export default {
  name: 'coreData',
  components: { NavBar },
}
</script>

<style scoped lang="scss">
.container {
  margin: 50px 0 150px;
}
</style>