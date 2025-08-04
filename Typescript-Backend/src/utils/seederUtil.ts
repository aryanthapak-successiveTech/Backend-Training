interface ISeededData{
  id:number,
  Name:string,
  College:string
}
export const seedData = (count:number):ISeededData[] => {
  const dummyData:ISeededData[] = Array.from({ length: count }, (ele, idx) => {
    return {
      id: idx + 1,
      Name: `Student ${idx + 1}`,
      College: "Acropolis",
    };
  });

  return dummyData;
};
