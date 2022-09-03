import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

const connectDb = handler =>  (req,res)=>{
  // if (mongoose.connection[0].readystate) {
  //   return handler(req,res)
  // }
//   await mongoose.connect(process.env.MONGO_URL)
//   return handler(req,res);
mongoose.connect(process.env.MONGO_URL)
return handler(req,res);
}
export default connectDb;