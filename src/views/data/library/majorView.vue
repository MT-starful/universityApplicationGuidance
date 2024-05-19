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
      <el-select v-model="classification" @change="classificationChange">
        <el-option :label="constant.common.all" :value="constant.common.all" />
        <el-option
          v-for="classification in classificationList"
          :key="classification"
          :label="classification"
          :value="classification"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="专业类：">
      <el-select v-model="category" :disabled="categoryList.length === 0">
        <el-option :label="constant.common.all" :value="constant.common.all" />
        <el-option v-for="category in categoryList" :key="category" :lang="category" :value="category" />
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
import { getMajorListList, getMajorClassificationCategoryList } from "@/tools/majorLibraryTool.js";
import cropPage from "@/tools/paginationTool.js";

export default {
  name: 'majorView',
  computed: {
    constant() {
      return constant;
    },
    categoryList() {
      const classificationInfo = this.allCategoryList.find(classificationInfo =>
        classificationInfo.classification === this.classification);
      return classificationInfo?.categoryList ?? [];
    },
    filterMajorList() {
      let majors = this.majorList;
      majors = majors.filter(major =>
        major.classification.indexOf(this.majorName) !== -1
        || major.category.indexOf(this.majorName) !== -1
        || major.name.indexOf(this.majorName) !== -1);

      if (this.classification !== constant.common.all) {
        majors = majors.filter(major => major.classification === this.classification);
      }

      if (this.category !== constant.common.all) {
        majors = majors.filter(major => major.category === this.category);
      }

      return majors;
    },
    displayMajorList() {
      return cropPage(this.filterMajorList, this.pageData);
    }
  },
  data() {
    return {
      majorName: '',
      classificationList: [],
      classification: constant.common.all,
      allCategoryList: [],
      category: constant.common.all,
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
    classificationChange() {
      this.category = constant.common.all;
    },
  },
  async mounted() {
    this.majorList = await getMajorListList();
    const classificationCategoryList = getMajorClassificationCategoryList(this.majorList);
    this.classificationList = classificationCategoryList.classificationList;
    this.allCategoryList = classificationCategoryList.allCategoryList;
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