import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  {type:String, required:true},
  email:  {type:String, required:true},
  password:  {type:String, required:true},
  img:  {type:String, required:true},


}, {timestamps:true} );
mongoose.models ={}
export default mongoose.model("user", UserSchema);