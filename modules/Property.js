import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types

const PropertySchema = new Schema({
  user: {
    type: ObjectId,
    ref: "user"
  },
  category:  {type:String, required:true},
  type:  {type:String, required:true},
  subtype:  {type:String, required:true},
  city:  {type:String, required:true},
  size:  {type:Number,required:true},
  unit:  {type:String,required:true},
  price:  {type:Number, required:true},
  location:  {type:String,required:true},
  img:  {type:String, required:true},
  img2:  {type:String, required:true},
  img3:  {type:String, required:true},
  phone:{type:String, required:true},
  name:{type:String, required:true},
  email:{type:String, required:true},
  desc:{type:String, required:true},
  bath:{type:Number,required:true},
  bed:{type:Number,required:true},




}, {timestamps:true} );
mongoose.models ={}
export default mongoose.model("Property", PropertySchema);