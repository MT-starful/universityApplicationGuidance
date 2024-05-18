export default async function getFillingLineList(year, subject, batch) {
try {
    const fillingLineList = await import(`@/../public/data/fillingLine/${year}/${subject}_${batch}.js`);
    return fillingLineList.default;
  } catch {
    return [];
  }
}