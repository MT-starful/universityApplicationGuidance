import removeDuplicate from "@/tools/arrayTool.js";

export async function getMajorListList() {
  try {
    const majorList = await import('@/../public/data/library/major/undergraduate.js');
    return majorList.default;
  } catch {
    return [];
  }
}