export const seedData = (count:number) => {
  const dummyData = Array.from({ length: count }, (ele, idx) => {
    return {
      id: idx + 1,
      Name: `Student ${idx + 1}`,
      College: "Acropolis",
    };
  });

  return dummyData;
};
