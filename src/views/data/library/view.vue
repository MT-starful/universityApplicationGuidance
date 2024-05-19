<template>
  <el-page-header @back="goBack">
    <template #content>
      <span>本科院校库</span>
    </template>
  </el-page-header>

  <el-divider class="head-divider" />

  <el-input v-model.trim="schoolName" placeholder="学校名称" prefix-icon="Search" clearable />

  <el-form class="filter-form">
    <el-form-item label="省份：">
      <el-select v-model="province" @change="provinceChange">
        <el-option :label="constant.common.all" :value="constant.common.all" />
        <el-option v-for="province in provinceList" :key="province" :label="province" :value="province" />
      </el-select>
    </el-form-item>

    <el-form-item label="城市：">
      <el-select v-model="city" :disabled="cityList.length === 0">
        <el-option :label="constant.common.all" :value="constant.common.all" />
        <el-option v-for="city in cityList" :key="city" :label="city" :value="city" />
      </el-select>
    </el-form-item>

    <el-form-item label="办学模式：">
      <el-select v-model="mode" :fit-input-width="true">
        <el-option :label="constant.common.all" :value="constant.common.all" />
        <el-option v-for="mode in modeList" :key="mode" :label="mode" :value="mode" />
      </el-select>
    </el-form-item>
  </el-form>

  <el-divider class="table-head-divider" />

  <el-table :data="displayUniversityList" stripe>
    <el-table-column prop="name" label="院校名称" />
    <el-table-column prop="province" label="省份" width="70px" />
    <el-table-column prop="city" label="城市" width="70px" />
    <el-table-column prop="mode" label="办学模式" width="60px" />
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
    :total="filterUniversityList.length"
    layout="total, prev, pager, next,sizes, jumper"
  />
</template>

<script>
import constant from "@/constant/constant.js";
import {
  getUniversityListList,
  getUniversityModeList,
  getUniversityProvinceCityList
} from "@/tools/universityLibraryTool.js";
import cropPage from "@/tools/paginationTool.js";

export default {
  name: 'libraryView',
  computed: {
    constant() {
      return constant
    },
    cityList() {
      const provinceInfo = this.allCityList.find(province => province.provinceName === this.province);
      return provinceInfo?.cityList ?? [];
    },
    filterUniversityList() {
      let university = this.universityList;
      university = university.filter(school => school.name.indexOf(this.schoolName) !== -1);

      if (this.province !== constant.common.all) {
        university = university.filter(school => school.province === this.province);
      }

      if (this.city !== constant.common.all) {
        university = university.filter(school => school.city === this.city);
      }

      if (this.mode !== constant.common.all) {
        university = university.filter(school => school.mode === this.mode);
      }

      return university;
    },
    displayUniversityList() {
      return cropPage(this.filterUniversityList, this.pageData);
    }
  },
  data() {
    return {
      schoolName: '',
      provinceList: [],
      province: constant.common.all,
      allCityList: [],
      city: constant.common.all,
      modeList: [],
      mode: constant.common.all,
      universityList: [],
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
    provinceChange() {
      this.city = constant.common.all;
    }
  },
  async mounted() {
    this.universityList = await getUniversityListList();
    this.modeList = getUniversityModeList(this.universityList);
    const provinceCityList = getUniversityProvinceCityList(this.universityList);
    this.provinceList = provinceCityList.provinceList;
    this.allCityList = provinceCityList.allCityList;
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