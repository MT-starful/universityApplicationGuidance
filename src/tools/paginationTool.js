// 根据当前页和页面大小裁剪数据（用于分页器）
export default function cropPage(dataList, currentPage, pageSize) {
  return dataList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}