<template>
  <el-card class="card" @click="goWeb">
    <p class="date" v-if="linkInfo.date">{{ linkInfo.date }}</p>
    <p class="title">{{ linkInfo.title }}</p>
  </el-card>
</template>

<script>
export default {
  name: 'linkCard',
  props: {
    linkInfo: {
      type: Object,
      default: () => ({
        date: '',
        title: '',
        url: 'https://www.baidu.com',
      }),
    }
  },
  methods: {
    goWeb() {
      window.location.href = this.linkInfo.url;
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 12px;

  .date {
    margin: 0;
    color: #CDD0D6;
  }

  .title {
    margin: 0;
    color: #409EFF;
  }
}
</style>