<template>
  <el-page-header>
    <template #content>
      <span>本科院校库</span>
    </template>
  </el-page-header>

  <el-divider class="head-divider" />

  <el-input v-model.trim="schoolName" placeholder="学校名称" prefix-icon="Search" clearable />

  <el-form class="filter-form">
    <el-form-item label="省份：">
      <el-select v-model="province">
        <el-option label="全部" value="全部" />
      </el-select>
    </el-form-item>

    <el-form-item label="城市：">
      <el-select v-model="city">
        <el-option label="全部" value="全部" />
      </el-select>
    </el-form-item>

    <el-form-item label="办学模式：">
      <el-select v-model="mode">
        <el-option label="全部" value="全部" />
      </el-select>
    </el-form-item>
  </el-form>

  <el-divider class="table-head-divider" />

  <el-table :data="universityList" stripe>
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
    :total="universityList.length"
    layout="total, prev, pager, next,sizes, jumper"
  />
</template>

<script>
export default {
  name: 'libraryView',
  data() {
    return {
      schoolName: '',
      province: '',
      city: '',
      mode: '',
      universityList: [],
      pageData: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20, 50, 100],
        pagerCount: 5,
      },
    }
  },
  methods: {},
  async mounted() {
    let list = await import('@/../public/data/library/university/undergraduate.js');
    this.universityList = list.default.slice(0, 20);
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