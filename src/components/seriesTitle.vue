<template>
  <p class="title">{{ title }}</p>
</template>

<script>
export default {
  name: 'seriesTitle',
  props: {
    title: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  border-left: 8px dashed #409EFF;
  padding-left: 8px;
  margin-top: 48px;
}
</style>