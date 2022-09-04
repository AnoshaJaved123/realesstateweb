// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sample from "../../modules/Sample"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
                // console.log(req.body)

                // let sample = await Sample.find()
                // console.log("sample data",sample)
                let u = new Sample({
                        name:'anoshatest',
                        email:'anoshaemail',
                        password:'anoshapassword',
                        img:'anoshaurl',
                      
                 })
                 await u.save()
                //  res.send({ success: true })
                res.status(200).json({ success: true, u})

     
               

        }


 
export default connectDb(handler);
