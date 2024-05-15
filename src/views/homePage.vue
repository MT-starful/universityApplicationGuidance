<template>
  <el-card class="tab-bar">
    <el-tabs v-model="activeNav" tab-position="bottom" :stretch="true">
      <el-tab-pane name="first">
        <template #label>
          <el-icon>
            <Opportunity />
          </el-icon>
          <span>说明</span>
        </template>
      </el-tab-pane>

      <el-tab-pane name="second">
        <template #label>
          <el-icon>
            <Opportunity />
          </el-icon>
          <span>说明</span>
        </template>
      </el-tab-pane>

      <el-tab-pane name="third">
        <template #label>
          <el-icon>
            <Opportunity />
          </el-icon>
          <span>说明</span>
        </template>
      </el-tab-pane>

      <el-tab-pane name="fourth">
        <template #label>
          <el-icon>
            <Opportunity />
          </el-icon>
          <span>说明</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { Opportunity } from "@element-plus/icons-vue";

export default {
  name: "homePage",
  components: { Opportunity },
  data() {
    return {
      activeNav: 'first',
    }
  }
}
</script>

<style scoped lang="scss">
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