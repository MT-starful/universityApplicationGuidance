<template>
  <div v-for="series in seriesList" :key="series.title">
    <SeriesTitle :title="series.title" />
    <LinkCard v-for="linkInfo in series.linkList" :key="linkInfo.url" :linkInfo="linkInfo" />
  </div>
</template>

<script>
import LinkCard from "@/components/linkCard.vue";
import SeriesTitle from "@/components/seriesTitle.vue";
import { seriesList } from "@/../public/data/material/website.js";

export default {
  name: 'websiteMaterial',
  computed: {
    seriesList() {
      return seriesList
    }
  },
  components: { SeriesTitle, LinkCard }
}
</script>

<style scoped lang="scss">

</style>