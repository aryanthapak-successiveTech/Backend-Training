import { ICountry } from "../../Interfaces/CountryInterface";
import { SeedService } from "./SeedService";
const dummy: ICountry[] = [];
jest.mock("../Models/Countries", () => {
  return {
    __esModule:true,
    default: {
      insertMany: jest.fn((data) => {
        dummy.push(...data);
        return Promise.resolve(dummy);
      }),
    },
  };
});

describe("Seed Service should be used properly",()=>{
    let seedService:SeedService;
    beforeEach(()=>{
        seedService=new SeedService();
    })

    it("Inserts data Properly",async ()=>{
        const insertedData=await seedService.seed();
        expect(insertedData.length).toBe(4);
    })

})
