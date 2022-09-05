import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
// import { S3Client, PutObjectCommand, GetObjectCommand } from ' @aws-sdk/lib-storage'
import dotenv from 'dotenv'
dotenv.config()
var jwt = require('jsonwebtoken');
import connectDb from "../../middleware/mongoose"
import Property from "../../modules/Property";

const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET
const region = process.env.NEXT_PUBLIC_AWS_Region
const accessKeyId = process.env.NEXT_PUBLIC_AWS_Access_key_ID
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_Secret_access_key
let url = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg"
let url2 = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg"
let url3 = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg"




const s3 = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
})



const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const handler = nextConnect();

handler.use(upload.fields([
    {
        name: 'image',
    },
    {
        name: 'image2',
    },
    {
        name: 'image3',
    },


]))

// handler.use(upload.single('image3')); 




handler.post(async (req, res) => {

  
    console.log('req.body', JSON.parse(JSON.stringify(req.body)))


    // console.log('req.file', req.files.image)
    // console.log('req.file', req.files.image2)
    // console.log('req.file', req.files.image3)

   
    if (req.files.image) {
        console.log(req.files.image[0].buffer)
        let filesname = uuidv4() + "files1";

        const params = {
            Bucket: bucketName,
            // Body: req.files.image.buffer,
            Body:req.files.image[0].buffer,
            Key: filesname,
            ContentType: req.files.image[0].mimetype
        }

        const command = new PutObjectCommand(params)
        await s3.send(command)
        //GET OBJECT FROM AWS   
        const getObjectParams = {
            Bucket: bucketName,
            Key: filesname,
        }
        const cmd = new GetObjectCommand(getObjectParams);
        // const url = await getSignedUrl(s3, cmd);


        url = `https://${bucketName}.s3.${region}.amazonaws.com/${filesname}`
    }

    if (req.files.image2) {
        console.log(req.files.image2[0].buffer)
        let filesname2 = uuidv4() + "files2";

        const params2 = {
            Bucket: bucketName,
            Body: req.files.image2[0].buffer,
            Key: filesname2,
            ContentType: req.files.image2[0].mimetype
        }

        const command2 = new PutObjectCommand(params2)
        await s3.send(command2)
        //GET OBJECT FROM AWS   
        const getObjectParams2 = {
            Bucket: bucketName,
            Key: filesname2,
        }
        const cmd = new GetObjectCommand(getObjectParams2);
        // const url = await getSignedUrl(s3, cmd);


        url2 = `https://${bucketName}.s3.${region}.amazonaws.com/${filesname2}`
        }

    if (req.files.image3) {
        console.log(req.files.image3[0].buffer)
        let filesname3 = uuidv4() + "files3";

        const params3 = {
            Bucket: bucketName,
            Body: req.files.image3[0].buffer,
            Key: filesname3,
            ContentType: req.files.image3[0].mimetype
        }

        const command3 = new PutObjectCommand(params3)
        await s3.send(command3)
        //GET OBJECT FROM AWS   
        const getObjectParams3 = {
            Bucket: bucketName,
            Key: filesname3,
        }
        const cmd3 = new GetObjectCommand(getObjectParams3);
        url3 = `https://${bucketName}.s3.${region}.amazonaws.com/${filesname3}`
    }

    console.log(url,url2,url3)

    let r = await Property.findOneAndUpdate(
        {_id:req.body.pId},
        { $set: {      
        user: null,
        category: req.body.category,
        type: req.body.type,
        subtype: req.body.subtype,
        city: req.body.city,
        size: req.body.size,
        unit: req.body.unit,
        price: req.body.price,
        location: req.body.location,
        img: url,
        img2: url2,
        img3: url3,
        phone: req.body.phone,
        name: req.body.name,
        email: req.body.email,
        desc: req.body.desc,
        bed: req.body.bed,
        bath: req.body.bath,
    } }
    )
    res.send({ success: true })

});

export default connectDb(handler);

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};