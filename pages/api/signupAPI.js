// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../modules/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
dotenv.config()



const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET
const region = process.env.NEXT_PUBLIC_AWS_Region
const accessKeyId = process.env.NEXT_PUBLIC_AWS_Access_key_ID
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_Secret_access_key
 



const s3 = new S3Client({
    region:region,
    credentials: {
      accessKeyId:accessKeyId,
      secretAccessKey:secretAccessKey
    }
  })


  
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

 
const handler = nextConnect();

handler.use(upload.single('image')); // attribute name you are sending the file by 



handler.post(async (req, res) => {
    let url = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg"

    let filename = uuidv4() + "anoshaskills";

    console.log('req.body', JSON.parse(JSON.stringify(req.body)))
    console.log('req.file',req.file)
    if (req.file) {
        const params = {
            Bucket: bucketName,
            Body:req.file.buffer,
            Key: filename,
            ContentType: req.file.mimetype
        }
        
        const command = new PutObjectCommand(params)
        await s3.send(command)
        console.log(req.file.buffer)
  

        url = `https://${bucketName}.s3.${region}.amazonaws.com/${filename}`
        console.log("url generated",url)

    }

            console.log("url generated",url)
            let u = new User({
                name:req.body.name,
                email:req.body.email,
                password:CryptoJS.AES.encrypt(req.body.password,process.env.NEXT_PUBLIC_AES_SECRET).toString(),
                img:url,
              
         })
         await u.save()
         res.send({ success: true })

});

// export default handler;
export default connectDb(handler);

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};