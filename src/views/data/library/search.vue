<template>
  <el-alert class="search-alert" type="warning" :closable="false" show-icon>
    <template #default>
      暂未收录专科的院校与专业。请等待后续更新。
    </template>
  </el-alert>

  <div class="search-item">
    <p>院校</p>
    <el-button class="search-btn" type="primary" @click="goUniversityLibrary">本科院校库</el-button>
  </div>

  <div class="search-item">
    <p>专业</p>
    <el-button class="search-btn" type="primary" @click="goMajorLibrary">本科专业库</el-button>
  </div>
</template>

<script>
import constant from "@/constant/constant.js";

export default {
  name: 'librarySearch',
  methods: {
    goUniversityLibrary() {
      this.$router.push(`/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/universityView`);
    },
    goMajorLibrary() {
      this.$router.push(`/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/majorView`);
    }
  },
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