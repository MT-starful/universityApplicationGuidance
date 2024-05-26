<template>
  <div v-for="series in seriesList" :key="series.title">
    <SeriesTitle :title="series.title" />
    <LinkCard v-for="linkInfo in series.linkList" :key="linkInfo.url" :linkInfo="linkInfo" />
  </div>
</template>

<script>
import SeriesTitle from "@/components/seriesTitle.vue";
import LinkCard from "@/components/linkCard.vue";
import { seriesList } from "@/../public/data/news/message.js";

export default {
  name: 'applicationMessage',
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