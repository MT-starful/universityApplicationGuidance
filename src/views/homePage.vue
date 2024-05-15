<template>
  <div class="container">
    <el-backtop :right="20" :bottom="80" />
    <router-view />
  </div>

  <el-card class="tab-bar">
    <el-tabs v-model="activeTab" tab-position="bottom" :stretch="true">
      <el-tab-pane :name="constant.tabBar.DESCRIPTION">
        <template #label>
          <el-icon>
            <Opportunity />
          </el-icon>
          <span>说明</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.tabBar.DATA">
        <template #label>
          <el-icon>
            <Histogram />
          </el-icon>
          <span>数据</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.tabBar.NEWS">
        <template #label>
          <el-icon>
            <Management />
          </el-icon>
          <span>官讯</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.tabBar.MATERIAL">
        <template #label>
          <el-icon>
            <List />
          </el-icon>
          <span>资料</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { Histogram, List, Management, Opportunity } from "@element-plus/icons-vue";
import constant from "@/constant/constant.js";

export default {
  name: "homePage",
  computed: {
    constant() {
      return constant
    }
  },
  components: { List, Management, Histogram, Opportunity },
  data() {
    return {
      activeTab: constant.tabBar.DATA,
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 150px;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;

  :deep(.el-card__body) {
    padding: 0;
  }

  :deep(.el-tabs__header) {
    margin-top: 0;
  }

  :deep(.el-tabs__item) {
    padding: 0;
    height: 60px;
  }
}
</style>