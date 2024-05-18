<template>
  <el-card class="tab-bar">
    <el-tabs v-model="activeTab" :stretch="true" @tab-click="navChange">
      <el-tab-pane :name="constant.dataNavBar.FILLING_LINE">
        <template #label>
          <span>投档线</span>
        </template>
      </el-tab-pane>

      <el-tab-pane :name="constant.dataNavBar.LIBRARY">
        <template #label>
          <span>大学专业库</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import constant from "@/constant/constant.js";

export default {
  name: 'navBar',
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
      this.$router.push(`/${constant.tabBar.DATA}/${option.props.name}`);
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