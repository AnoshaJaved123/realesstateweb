var jwt = require('jsonwebtoken');
import User from '../../modules/User'
import connectDb from "../../middleware/mongoose"



const handler = async (req, res) => {


    const { authorization } = req.headers
    if (!authorization) {
        return res.status(400).json({ error: "you must log in" })
    }
    try {
        const {userId} = jwt.verify(authorization, process.env.NEXT_PUBLIC_JWT_SECRET)
        req.userId = userId
        // const {email} = req.body
        // req.body =email
        const dbuser = await User.findOne({_id:userId})
        
        console.log(dbuser)
        res.status(200).json({dbuser})
          
              
    } catch (error) {
        return res.status(400).json({ error: "error" })
    } 
  }



export default connectDb(handler);