<template>
  <div v-for="series in seriesList" :key="series.title">
    <SeriesTitle :title="series.title" />
    <LinkCard v-for="linkInfo in series.linkList" :key="linkInfo.url" :linkInfo="linkInfo" />
  </div>
</template>

<script>
import LinkCard from "@/components/linkCard.vue";
import SeriesTitle from "@/components/seriesTitle.vue";
import { seriesList } from "@/../public/data/news/guidance.js";

export default {
  name: 'applicationGuidance',
  components: { SeriesTitle, LinkCard },
  computed: {
    seriesList() {
      return seriesList
    }
  }
}
</script>

<style scoped lang="scss">
</style>