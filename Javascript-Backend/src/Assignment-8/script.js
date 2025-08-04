import mongoose from "mongoose";
import { SeedService } from "./Service/SeedService.js";
import { config } from "dotenv";

config();

if(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL);
const seedService=new SeedService();

seedService.seed().then(()=>{
    console.log("Seeded");
});