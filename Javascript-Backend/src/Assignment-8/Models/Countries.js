import mongoose from "mongoose";

const countrySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Country name is necessary"]
    },
    sports:{
        type:String,
        enum:["Cricket","Football","Basket Ball","Chess"],
        required:[true,"There must a sport"]
    }
})

const countryModel=mongoose.model("Countries",countrySchema);

export default countryModel;