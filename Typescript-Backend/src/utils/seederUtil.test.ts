import { seedData } from "./seederUtil";

describe("Seeder function works successfully",()=>{
    it("receives count and creates data of correct length",()=>{
        expect(seedData(4).length).toBe(4);
    });

    it("Follows correct object structure",()=>{
        const result=seedData(1);
        const firstStudentObj=result[0];
        expect(firstStudentObj).toHaveProperty("id");
        expect(firstStudentObj).toHaveProperty("Name");
        expect(firstStudentObj).toHaveProperty("College");
    });

    it("Return Empty Array for 0 count",()=>{
        expect(seedData(0).length).toBe(0);
    });
})