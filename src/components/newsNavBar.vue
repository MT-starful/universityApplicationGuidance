<template>
  <el-card class="tab-bar">
    <el-tabs v-model="activeTab" :stretch="true" @tab-click="navChange">
      <el-tab-pane :name="constant.newsNavBar.QUERY_SYSTEM">
        <template #label>
          <span>数据查询</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.newsNavBar.GUIDANCE">
        <template #label>
          <span>填报辅导</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.newsNavBar.MESSAGE">
        <template #label>
          <span>资讯消息</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import constant from "@/constant/constant.js";

export default {
  name: 'newsNavBar',
  computed: {
    constant() {
      return constant
    }
  },
  data() {
    return {
      activeTab: '',
    }
  },
  methods: {
    navChange(option) {
      this.$router.push(`/${constant.tabBar.NEWS}/${option.props.name}`);
    },
  },
  mounted() {
    this.activeTab = window.location.hash.split('/')[2];
  }
}
</script>

<style scoped lang="scss">
.tab-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  :deep(.el-card__body) {
    padding: 0;
  }

  :deep(.el-tabs__header) {
    margin: 0;
  }

  :deep(.el-tabs__item) {
    padding: 0;
  }
}
</style>