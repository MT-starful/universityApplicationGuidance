<template>
  <el-alert style="margin-top: 72px;" type="warning" :closable="false" show-icon>
    <template #default>
      暂未收录体育、艺术类及本科提前批、专科的数据。请等待后续更新。
    </template>
  </el-alert>

  <el-form style="margin-top: 24px;">
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
        <el-radio value="science">理科</el-radio>
        <el-radio value="liberal">文科</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="批次：">
      <el-radio-group v-model="batch">
        <el-radio value="first">本科一批</el-radio>
        <el-radio value="second">本科二批</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>

  <el-button style="width: 100%;" type="primary" @click="search">查询</el-button>
</template>

<script>
export default {
  name: "filingLineSearch",
  data() {
    return {
      year: '',
      subject: '',
      batch: '',
    }
  },
  methods: {
    search() {
      this.$router.push('/collegeApplicationGuidance/filingLineView');
    }
  },
}
</script>

<style scoped lang="scss">

</style>