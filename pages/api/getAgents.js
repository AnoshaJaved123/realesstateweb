// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Agents from "../../modules/Agents"
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{

    
        let agents = await Agents.find()
        res.json(agents)
     
}

export default connectDb(handler);
  