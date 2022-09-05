var jwt = require('jsonwebtoken');
import connectDb from "../../middleware/mongoose"
import Property from "../../modules/Property";



const handler = async (req, res) => {


    
    let property = await Property.find()
    res.json(property)
 
  }



export default connectDb(handler);