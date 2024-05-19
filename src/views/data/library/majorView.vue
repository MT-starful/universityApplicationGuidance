<template>
  <el-page-header @back="goBack">
    <template #content>
      <span>本科专业库</span>
    </template>
  </el-page-header>

  <el-divider class="head-divider" />

  <el-input v-model.trim="majorName" placeholder="门类/专业类/专业名称" prefix-icon="Search" clearable />

  <el-form class="filter-form">
    <el-form-item label="门类：">
      <el-select v-model="classification" @change="categoryChange">
        <el-option :label="constant.common.all" :value="constant.common.all" />
      </el-select>
    </el-form-item>

    <el-form-item label="专业类：">
      <el-select v-model="category">
        <el-option :label="constant.common.all" :value="constant.common.all" />
      </el-select>
    </el-form-item>
  </el-form>

  <el-divider class="table-head-divider" />

  <el-table :data="displayMajorList" stripe>
    <el-table-column prop="classification" label="门类" width="70px" />
    <el-table-column prop="category" label="专业类" />
    <el-table-column prop="name" label="专业名称" />
    <template #empty>
      <span>没有相关专业</span>
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
    :total="filterMajorList.length"
    layout="total, prev, pager, next,sizes, jumper"
  />
</template>

<script>
import constant from "@/constant/constant.js";
import { getMajorListList } from "@/tools/majorLibraryTool.js";

export default {
  name: 'majorView',
  computed: {
    constant() {
      return constant;
    },
    filterMajorList() {
      let major = this.majorList;
      return major;
    },
    displayMajorList() {
      return this.filterMajorList.slice(0, 20);
    }
  },
  data() {
    return {
      majorName: '',
      classification: '',
      category: '',
      majorList: [],
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
      this.$router.push(`/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/search`);
    },
    categoryChange() {
    },
  },
  async mounted() {
    this.majorList = await getMajorListList();
  }
}
</script>

<style scoped lang="scss">
.head-divider {
  margin: 8px 0;
}

.filter-form {
  margin-top: 12px;
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