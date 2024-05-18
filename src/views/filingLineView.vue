<template>
  <el-page-header @back="goBack">
    <template #content>
      <span>{{ title }}</span>
    </template>
  </el-page-header>

  <el-divider class="head-divider" />

  <el-input v-model="schoolName" placeholder="学校名称" prefix-icon="Search" clearable />

  <el-form class="filter-form">
    <el-form-item label="筛选区间类型：">
      <el-radio-group v-model="searchType">
        <el-radio :value="constant.searchType.SCORE">按分数</el-radio>
        <el-radio :value="constant.searchType.RANK">按排名</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item v-if="searchType === constant.searchType.SCORE" label="分数区间：">
      <el-input v-model="maxScore" placeholder="最高分（不填默认为750）" type="number" clearable />
      <el-input class="filter-input" v-model="minScore" placeholder="最低分（不填默认为0）" type="number" clearable />
    </el-form-item>

    <el-form-item v-if="searchType === constant.searchType.RANK" label="排名区间：">
      <el-input v-model="maxRank" placeholder="最高排名（不填默认为1）" type="number" clearable />
      <el-input class="filter-input" v-model="minRank" placeholder="最低排名（不填默认无穷大）" type="number" clearable />
    </el-form-item>
  </el-form>

  <el-divider class="table-head-divider" />

  <el-table :data="filterFillingLineList" stripe>
    <el-table-column prop="code" label="院校代码" width="60px" />
    <el-table-column prop="name" label="院校名称" min-width="50px" />
    <el-table-column prop="score" label="投档线" width="70px" />
    <el-table-column prop="rank" label="最低投档线排名" width="80px" />
    <template #empty>
      <span>没有相关院校</span>
    </template>
  </el-table>

  <el-pagination
    class="pagination"
    @current-change="page => pageData.currentPage = page"
    @size-change="size => pageData.pageSize = size"
    :current-page="pageData.currentPage"
    :page-size="pageData.pageSize"
    :page-sizes="pageData.pageSizes"
    :pager-count="pageData.pagerCount"
    :total="fillingLineList.length"
    layout="total, prev, pager, next,sizes, jumper"
  />
</template>

<script>
import { useRoute } from "vue-router";
import constant from "@/constant/constant.js";
import map from '@/map/map.js'
import cropPage from "@/tools/paginationTool.js";
import getFillingLineList from "@/tools/fillingLineTool.js";

export default {
  name: "filingLineView",
  computed: {
    constant() {
      return constant;
    },
    title() {
      return `${this.year}${map.subjectMap.get(this.subject)}${map.batchMap.get(this.batch)}投档线`;
    },
    filterFillingLineList() {
      return cropPage(this.fillingLineList, this.pageData);
    }
  },
  data() {
    return {
      year: '',
      subject: '',
      batch: '',
      schoolName: '',
      searchType: constant.searchType.SCORE,
      maxScore: '',
      minScore: '',
      maxRank: '',
      minRank: '',
      fillingLineList: [],
      pageData: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20, 50, 100],
        pagerCount: 5,
      },
    }
  },
  methods: {
    goBack() {
      this.$router.push('/filingLineSearch');
    },
  },
  async mounted() {
    const route = useRoute();
    this.year = route.query.year;
    this.subject = route.query.subject;
    this.batch = route.query.batch;
    if (!this.year || !this.subject || !this.batch) {
      this.goBack();
    }

    this.fillingLineList = await getFillingLineList(this.year, this.subject, this.batch);
  }
}
</script>

<style scoped lang="scss">
.head-divider {
  margin: 8px 0;
}

.filter-form {
  margin-top: 12px;

  .filter-input {
    margin-top: 4px;
  }
}

.table-head-divider {
  margin: 0;
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
</style>