import mongoose from 'mongoose';
const { Schema } = mongoose;

const AgentsSchema = new Schema({
  name:  {type:String, required:true},
  email:  {type:String, required:true, unique:true},
  img:  {type:String, required:true},
  phone:  {type:String, required:true},
  sales:  {type:Number, required:true},
 

}, {timestamps:true} );
mongoose.models ={}
export default mongoose.model("Agents", AgentsSchema);