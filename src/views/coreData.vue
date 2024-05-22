<template>
  <NavBar />
  <div class="container">
    <el-backtop :right="24" :bottom="96" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/dataNavBar.vue";

export default {
  name: 'coreData',
  components: { NavBar },
}
</script>

<style scoped lang="scss">
.container {
  margin: 48px 0 156px;
}
</style>