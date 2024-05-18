<template>
  <el-alert class="search-alert" type="warning" :closable="false" show-icon>
    <template #default>
      暂未收录专科的院校与专业。请等待后续更新。
    </template>
  </el-alert>

  <div class="search-item">
    <p>院校</p>
    <el-button class="search-btn" type="primary">本科院校库</el-button>
  </div>

  <div class="search-item">
    <p>专业</p>
    <el-button class="search-btn" type="primary">本科专业库</el-button>
  </div>
</template>

<script>
export default {
  name: 'librarySearch'
}
</script>

<style scoped lang="scss">
.search-alert {
  margin-top: 72px;
}

.search-item {
  margin-bottom: 48px;

  .search-btn {
    width: 100%;
  }
}
</style>