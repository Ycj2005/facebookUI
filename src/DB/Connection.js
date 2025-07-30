
import mongoose from "mongoose";

export default async function ConnectionDB(){
    try{
       await mongoose.connect(process.env.uri);
    }
    catch(error){
        console.log(error);
    }
}   