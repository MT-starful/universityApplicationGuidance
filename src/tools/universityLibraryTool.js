import removeDuplicate from "@/tools/arrayTool.js";

export async function getUniversityListList() {
  try {
    const universityList = await import('@/../public/data/library/university/undergraduate.js');
    return universityList.default;
  } catch {
    return [];
  }
}

export function getUniversityModeList(universityList) {
  const modeList = universityList.map(school => school.mode);
  return removeDuplicate(modeList);
}

export function getUniversityProvinceCityList(universityList) {
  let provinceList = universityList.map(school => school.province);
  provinceList = removeDuplicate(provinceList);

  // 获取所有城市列表，按省份进行区分
  const allCityList = provinceList.map(province => {
    const provinceUniversityList = universityList.filter(school => school.province === province);
    const cityList = provinceUniversityList.map(school => school.city);
    return {
      province,
      cityList: removeDuplicate(cityList),
    }
  });

  return {
    provinceList,
    allCityList,
  }
}