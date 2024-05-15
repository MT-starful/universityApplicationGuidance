<template>
  <el-page-header>
    <template #content>
      <span> Title </span>
    </template>
  </el-page-header>

  <el-divider style="margin: 8px 0;" />

  <el-input v-model="schoolName" placeholder="学校名称" prefix-icon="Search" clearable />

  <el-form style="margin-top: 12px;">
    <el-form-item label="筛选区间类型：">
      <el-radio-group v-model="searchType">
        <el-radio value="score">按分数</el-radio>
        <el-radio value="rank">按排名</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item v-if="searchType === 'score'" label="分数区间：">
      <el-input v-model="maxScore" placeholder="最高分（不填默认为750）" type="number" clearable />
      <el-input style="margin-top: 4px;" v-model="minScore" placeholder="最低分（不填默认为0）" type="number" clearable />
    </el-form-item>

    <el-form-item v-if="searchType === 'rank'" label="排名区间：">
      <el-input v-model="maxRank" placeholder="最高排名（不填默认为1）" type="number" clearable />
      <el-input
        style="margin-top: 4px;"
        v-model="minRank"
        placeholder="最低排名（不填默认为无穷大）"
        type="number"
        clearable
      />
    </el-form-item>
  </el-form>

  <el-divider style="margin: 0;" />

  <el-table :data="filterPitchLineList" stripe>
    <el-table-column prop="code" label="院校代码" width="60px" />
    <el-table-column prop="name" label="院校名称" min-width="50px" />
    <el-table-column prop="score" label="投档线" width="70px" />
    <el-table-column prop="rank" label="最低投档线排名" width="80px" />
    <template #empty>
      <span>没有相关院校</span>
    </template>
  </el-table>

  <el-pagination
    style="display: flex;flex-wrap: wrap;justify-content: center;margin-top: 8px;"
    @current-change="page => pageData.currentPage = page"
    @size-change="size => pageData.pageSize = size"
    :current-page="pageData.currentPage"
    :page-size="pageData.pageSize"
    :page-sizes="pageData.pageSizes"
    :pager-count="pageData.pagerCount"
    :total="pitchLineList.length"
    layout="total, prev, pager, next,sizes, jumper"
  />
</template>

<script>
import cropPage from "../../../universityApplicationGuidance - 副本/src/tools/paginationTool.js";
export default {
  name: "filingLineView",
  computed: {
    filterPitchLineList() {
      return cropPage(this.pitchLineList, this.pageData.currentPage, this.pageData.pageSize);
    }
  },
  data() {
    return {
      schoolName: '',
      searchType: 'score',
      maxScore: '',
      minScore: '',
      maxRank: '',
      minRank: '',
      pitchLineList: [
        { code: 1, name: '上海海事大学大连学院', score: 685, rank: 888888 },
        { code: 2, name: '上海海事大学大连学院', score: 685, rank: 888888 },
      ],
      pageData: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20, 50, 100],
        pagerCount: 5,
      },
    }
  },
  mounted() {
    this.pitchLineList = [];
    for (let i = 0; i <= 75; i++) {
      const obj = {
        code: i,
        name: '上海海事大学大连学院',
        score: 685,
        rank: 888888,
      };
      this.pitchLineList.push(obj);
    }
  }
}
</script>

<style scoped lang="scss">
</style>