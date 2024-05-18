<template>
  <router-view />
  <TabBar />
</template>

<script>
import TabBar from "@/views/tabBar.vue";

export default {
  name: "app",
  components: { TabBar },
}
</script>

<style scoped lang="scss">
</style>