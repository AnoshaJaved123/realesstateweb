var jwt = require('jsonwebtoken');
import Property from '../../modules/Property'
import connectDb from "../../middleware/mongoose"



const handler = async (req, res) => {

    
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(400).json({ error: "you must log in" })
    }
    try {
        const {userId} = jwt.verify(authorization, process.env.NEXT_PUBLIC_JWT_SECRET)
        req.userId = userId
        // console.log(userId)
        const property = await Property.find({user:userId})
      await res.status(200).json(property)
      
              
    } catch (error) {
        return res.status(400).json({ error: "log in again" })
    } 
  }



export default connectDb(handler);