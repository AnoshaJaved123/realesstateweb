// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../modules/Property"
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{
        if(req.method == "DELETE")
        {
                
        // const {productId} = req.body
        let property = await Product.findByIdAndDelete(req.body)
        res.status(200).json({ success: 'successfully deleted' })

}

        // try {
        //         let product = await Product.findById(req.params.id)
        
        //         if (!product) {
        //             return res.status(400).json("not found")
        //         }
        //         product = await Product.findByIdAndDelete(req.params.id)
        //         res.json({ "Success": "Product has been deleted", product: product });
        //     } catch (error) {
        //         console.log(error.message)
        
        // return res.status(500).json('internal server error')
        //     }

        
        }
     


export default connectDb(handler);
  