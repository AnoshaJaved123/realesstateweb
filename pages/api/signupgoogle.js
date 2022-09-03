// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../modules/User"
import connectDb from "../../middleware/mongoose"
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {

        if (req.method == "POST") {
                console.log(req.body)
                const {name,email,img} =req.body
                let user = await User.findOne({email: req.body.email})

                if(user){
                  
                   if (req.body.email == user.email) {
                    // var token = jwt.sign({name:user.name, email:user.email}, process.env.JWT_SECRET , { expiresIn: '2d' });
                    var token = jwt.sign({userId:user._id}, process.env.JWT_SECRET , { expiresIn: '7d' });
                    var n = user.name
                    var e = user.email
                    var i = user.img
                    res.status(200).json({ success: true, token,n,e,i})
                    console.log("token",token)
                   }
                   else{
                    res.status(400).json({ success: false, error:'Invalid Credentials' })
    
                   }
            }
              else{
                let u = new User({
                        name:req.body.name,
                        email:req.body.email,
                        // password:CryptoJS.AES.encrypt(req.body.password,process.env.AES_SECRET).toString(),
                        password:'set password',
                        img:req.body.img,
                        
                 })
                await u.save()
                var token = jwt.sign({user:u._id}, process.env.JWT_SECRET , { expiresIn: '7d' });
                // console.log("token",token)
                // var n = user.name
                // var e = user.email
                // var i = user.img
                res.status(200).json({ success: true, token})
              }
        }
        else {
                res.status(400).json({ error: 'This method is not allowed' })
                console.log(error)

        }

     
}

export default connectDb(handler);
