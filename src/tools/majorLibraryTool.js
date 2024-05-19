import removeDuplicate from "@/tools/arrayTool.js";

export async function getMajorListList() {
  try {
    const majorList = await import('@/../public/data/library/major/undergraduate.js');
    return majorList.default;
  } catch {
    return [];
  }
}

export function getMajorClassificationCategoryList(majorList) {
  let classificationList = majorList.map(major => major.classification);
  classificationList = removeDuplicate(classificationList);

  // 获取所有专业类列表，按门类进行区分
  const allCategoryList = classificationList.map(classification => {
    const classificationMajorList = majorList.filter(major => major.classification === classification);
    const categoryList = classificationMajorList.map(major => major.category);
    return {
      classification,
      categoryList: removeDuplicate(categoryList),
    }
  });

  return {
    classificationList,
    allCategoryList,
  }
}