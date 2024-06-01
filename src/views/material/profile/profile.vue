<template>
  <div class="btn-list">
    <el-button class="btn" type="primary">防诈（含真实案例，准大学生必看）</el-button>
  </div>

  <div class="btn-list">
    <el-button class="btn" type="primary">录取流程详解</el-button>
    <el-button class="btn" type="primary" @click="viewProfile(constant.profile.book)">高考天地怎么看</el-button>
  </div>

  <div class="btn-list">
    <el-button class="btn" type="primary">填报辅导与名词解释</el-button>
    <el-button class="btn" type="primary">常见问题解答</el-button>
  </div>

  <div class="btn-list">
    <el-button class="btn" type="primary">野鸡大学名单</el-button>
  </div>
</template>

<script>
import constant from "@/constant/constant.js";

export default {
  name: 'profileMaterial',
  computed: {
    constant() {
      return constant
    }
  },
  methods: {
    viewProfile(profile) {
      this.$router.push(`/${constant.tabBar.MATERIAL}/${constant.materialNavBar.PROFILE}/${profile}`);
    }
  }
}
</script>

<style scoped lang="scss">
.btn-list {
  display: flex;
  margin-top: 24px;

  .btn {
    width: 100%;
  }
}
</style>