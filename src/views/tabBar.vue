<template>
  <el-card class="tab-bar">
    <el-tabs v-model="activeTab" tab-position="bottom" :stretch="true" @tab-click="tabChange">
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
  name: 'tabBar',
  computed: {
    constant() {
      return constant
    }
  },
  components: { List, Management, Histogram, Opportunity },
  data() {
    return {
      activeTab: '',
    }
  },
  methods: {
    tabChange(option) {
      this.$router.push(`/${option.props.name}`);
    },
  },
  mounted() {
    this.activeTab = window.location.hash.split('/')[1];
  },
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