<template>
  <router-view />
  <TabBar />
</template>

<script>
import TabBar from "@/components/tabBar.vue";

export default {
  name: 'app',
  components: { TabBar },
}
</script>

<style scoped lang="scss">
</style>