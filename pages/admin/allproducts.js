import React from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import theme from '../../src/theme/theme'
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import mongoose from 'mongoose'
import { useRouter } from 'next/router';
import Image from 'next/image';

const Allproducts = ({property}) => {
  // const [pro, setpro] = useState([products])
  // console.log(products)
  const router = useRouter()

  const handledelete = async (pId)=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteProperty`,{
      method:"DELETE",
      headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          _id:pId
        })
  })
  const response = await res.json()
  router.reload('/admin/allproducts')

  }
  const handleupdate = async (pId)=>{
    router.push({
      pathname:'/admin/updateProducts',
      query: {pId : pId}
    })
    // const res =await fetch(`${process.env.NEXT_PUBLIC_HOST}/admin/updateProducts`,{
    //   method:"PUT",
    //   headers: {
    //       Accept: "application/json",
    //       "Content-type": "application/json",
    //     },
    //     body:JSON.stringify({
    //       _id:pId,
          
    //     })
  // })
  // const response = await res.json()
  // router.reload('/admin/allproducts')

  }
  return (
    <ThemeProvider theme={theme}>

    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {property.map((item)=>{return(<div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image layout='fill' alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.type} for {item.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.subtype}</h2>
          <p className="mt-1">Price: {item.price}</p>
          <p className="mt-1 text-green-500">Size: {item.size} ({item.unit})</p>
          <p className="mt-1 text-orange-500">Upload by: {item.name} ({item.phone})</p>

          <button onClick={()=>{handledelete(item._id)}} className=" bg-transparent disabled:bg-red-300 text-sm my-1 hover:bg-red-500 text-red-700 font-thin hover:text-white py-1 px-2 border border-red-500 hover:border-transparent">Delete</button>
          <button onClick={()=>{handleupdate(item._id)}} className=" mx-8 bg-transparent disabled:bg-sky-300 text-sm my-1 hover:bg-sky-500 text-sky-700 font-thin hover:text-white py-1 px-2 border border-sky-500 hover:border-transparent">Update</button>

        </div>
      </div>
    )})}
      
   
    </div>
  </div>
</section>

      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
  )
}

export default Allproducts
export const getServerSideProps = async () => {
  
  mongoose.connect(process.env.MONGO_URL)
  // let products = await Product.find({category:'shoes'})
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetchallProperty`, {
   })
const property = await res.json()

  return { 
    props: {property}
  };
  // try-catch removed for simplification
};