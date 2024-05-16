<template>
  <el-alert class="search-alert" type="warning" :closable="false" show-icon>
    <template #default>
      暂未收录体育、艺术类及本科提前批、专科的数据。请等待后续更新。
    </template>
  </el-alert>

  <el-form class="search-form">
    <el-form-item label="年份：">
      <el-radio-group v-model="year">
        <el-radio value="2023">2023</el-radio>
        <el-radio value="2022">2022</el-radio>
        <el-radio value="2021">2021</el-radio>
        <el-radio value="2020">2020</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="学科：">
      <el-radio-group v-model="subject">
        <el-radio :value="constant.subject.SCIENCE">理科</el-radio>
        <el-radio :value="constant.subject.LITERATURE">文科</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="批次：">
      <el-radio-group v-model="batch">
        <el-radio :value="constant.batch.FIRST">本科一批</el-radio>
        <el-radio :value="constant.batch.SECOND">本科二批</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>

  <el-button class="search-btn" type="primary" :disabled="isSearchDisabled" @click="search">查询</el-button>
</template>

<script>
import constant from "@/constant/constant.js";

export default {
  name: "filingLineSearch",
  computed: {
    constant() {
      return constant;
    },
    isSearchDisabled() {
      return !this.year || !this.subject || !this.batch;
    }
  },
  data() {
    return {
      year: '',
      subject: '',
      batch: '',
    }
  },
  methods: {
    search() {
      if (this.isSearchDisabled) {
        this.$message.error('存在未选择的参数，请检查');
        return;
      }
      this.$router.push({
        path: '/filingLineView',
        query: { year: this.year, subject: this.subject, batch: this.batch },
      });
    }
  },
}
</script>

<style scoped lang="scss">
.search-alert {
  margin-top: 72px;
}

.search-form {
  margin-top: 24px;
}

.search-btn {
  width: 100%;
}
</style>