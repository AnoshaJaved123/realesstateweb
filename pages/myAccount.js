import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import { parseCookies } from 'nookies'
import React,{useEffect,useState} from 'react'
import Cookies from 'js-cookie'
import Head from 'next/head'
import { BsTrash } from 'react-icons/bs';
import { BiCommentAdd } from 'react-icons/bi';
import Link from 'next/link'


const MyAccount = ({data,error}) => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [userdata, setuserdata] = useState(data)
  const [token, settoken] = useState(null)

  // console.log(userdata)

  useEffect(() => {

     setName(Cookies.get('googlename'))
     setEmail(Cookies.get('googleemail'))
     settoken(Cookies.get('token'))
     if (error) {
      router.push('/')
  }
   }, [])


  const handleupdate = async (pId)=>{
    router.push({
      pathname:'/updateProducts',
      query: {pId : pId}
    })
  }
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
    router.reload('/accountdata')
  
    }
  

  return (
    <div>
    <Head>
    <title>Real Estate Agency</title>

    </Head>
    <div className='container mx-auto'>
    <div className="flex flex-col">
      
    <h2 className='font-semibold text-2xl justify-center text-center mt-4 mb-3'>Welcome {name} !</h2>
    <p className='text-green-600 justify-center text-center '>Your Previous data Record</p>
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Property category
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Property Size
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Property Price
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Property Location
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Property Contact
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Delete
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Update
              </th>
            </tr>
          </thead>
     {userdata && <> {userdata.map(item=>{  return( <tbody key={item._id} >
         
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}/{item.subtype} for {item.category}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.size} ({item.unit})
              </td>
             
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              PKR. {item.price}
              </td>
             
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               {item.location}, {item.city}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               {item.name} ({item.phone})
              </td>
              <td className="text-base text-red-700 cursor-pointer px-6 py-4 whitespace-nowrap">
              <button onClick={()=>{handledelete(item._id)}} className=" bg-transparent disabled:bg-red-300 text-sm my-1 hover:bg-red-500 text-red-700 font-thin hover:text-white py-1 px-2 border border-red-500 hover:border-transparent">Delete</button>
              </td>
              <td className="text-base text-blue-700 cursor-pointer px-6 py-4 whitespace-nowrap">
            
          <button onClick={()=>{handleupdate(item._id)}} className=" mx-8 bg-transparent disabled:bg-sky-300 text-sm my-1 hover:bg-sky-500 text-sky-700 font-thin hover:text-white py-1 px-2 border border-sky-500 hover:border-transparent">Update</button>              </td>
            </tr>
            
        
          </tbody>
     ) })}
     </>
     }
        </table>
    
    
      </div>
    </div>
  </div>
</div>


</div>
    </div>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  mongoose.connect(process.env.MONGO_URL)
  const { token } = parseCookies(context)
    if (!token) {
        return {
            props: { data: [] }
        };
    }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/accountdata`, {
        headers: {
            "Authorization": token
        }
    })
    const data = await res.json()
    if (data.error) {
      return {
          props: { error: data.error }
          // props: { error: products }
          // props: { products: [] }

      };
  }

    return {
        props: { data }
    };
  }

export default MyAccount