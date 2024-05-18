<template>
  <div class="container">
    <el-backtop :right="20" :bottom="80" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'coreData'
}
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 150px;
}
</style>