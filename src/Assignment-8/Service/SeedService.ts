import { ICountry } from "../../Interfaces/CountryInterface.js";
import countryModel from "../Models/Countries.js";
export class SeedService{
    async seed():Promise<ICountry[]>{
        const sports=["Cricket","Football","Basket Ball","Chess"];

        const countries=["Australia","India","USA","UAE"];
        const data=countries.map((ele)=>{
            const selectRandomSport=Math.floor(Math.random()*3);
            return{
                name:ele,
                sports:sports[selectRandomSport]
            }
        })
    const newData:ICountry[]=await countryModel.insertMany(data);
    return newData;
    }
}