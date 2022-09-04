// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../modules/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {
        if (req.method == "POST") {
                // console.log(req.body)
                let user = await User.findOne({email: req.body.mail})
             
                if(user){
                const bytes  = CryptoJS.AES.decrypt(user.password, process.env.NEXT_PUBLIC_AES_SECRET);
                let decryptedpass = bytes.toString(CryptoJS.enc.Utf8)
               if (req.body.mail == user.email && req.body.password == decryptedpass) {
                // var token = jwt.sign({name:user.name, email:user.email}, process.env.JWT_SECRET , { expiresIn: '2d' });
                var token = jwt.sign({userId:user._id}, process.env.NEXT_PUBLIC_JWT_SECRET , { expiresIn: '7d' });
                var name = user.name
                var email = user.email
                var img = user.img


                       res.status(200).json({ success: true, token,name,email,img})
               }
               else{
                res.status(400).json({ success: false, error:'Invalid Credentials' })

               }
        }
        else {
                res.status(400).json({ success: false, error:'No user found' })

        }
               
        }
        else {
                res.status(400).json({ error: 'This method is not allowed' })

        }

     
}

export default connectDb(handler);
