<template>
  <el-card class="tab-bar">
    <el-tabs v-model="activeTab" :stretch="true" @tab-click="navChange">
      <el-tab-pane :name="constant.materialNavBar.PROFILE">
        <template #label>
          <span>辅导资料</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.materialNavBar.VIDEO">
        <template #label>
          <span>推荐视频</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.materialNavBar.WEBSITE">
        <template #label>
          <span>推荐网站</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import constant from "@/constant/constant.js";

export default {
  name: 'materialNavBar',
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
      this.$router.push(`/${constant.tabBar.MATERIAL}/${option.props.name}`);
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