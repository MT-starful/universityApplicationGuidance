<template>
  <div v-for="series in seriesList" :key="series.title">
    <SeriesTitle :title="series.title" />
    <LinkCard v-for="linkInfo in series.linkList" :key="linkInfo.url" :linkInfo="linkInfo" />
  </div>
</template>

<script>
import { seriesList } from "@/../public/data/news/querySystem.js";
import SeriesTitle from "@/components/seriesTitle.vue";
import LinkCard from "@/components/linkCard.vue";

export default {
  name: 'querySystem',
  components: { LinkCard, SeriesTitle },
  computed: {
    seriesList() {
      return seriesList
    }
  }
}
</script>

<style scoped lang="scss">
</style>