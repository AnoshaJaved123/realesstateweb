import React,{useState} from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import theme from '../../src/theme/theme'
import { ThemeProvider } from "@mui/material/styles";
import {
  Grid,

} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const Addagents = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [sales, setsales] = useState(0)
  const [file, setFile] = useState()
  const [errorFlag, setErrorFlag] = useState(false);

  const router = useRouter()


  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("sales", sales)


    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addAgents`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
      },
      body: formData,
    })
    const response2 = await res.json()
    if (response2.success) {
      
       toast.success('New Agent added', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
    }
    else{
      toast.error('Something went wrong', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
    }
  setFile()
  setEmail('')
  setName('')
  setphone(0)
  setsales(0)
  }



  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }
  
  return (<>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <ThemeProvider theme={theme}>
  
    <FullLayout>
    {/* <h2 className='text-center text-2xl font-bold text-gray-700'></h2> */}
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Product">
        <form onSubmit={submit} action="/posts" method="POST" encType="multipart/form-data" >
                <h1 className="text-center text-3xl font-semibold mb-5">Sign Up</h1>
                {/* Name input */}
                <div className="mb-6">
                  <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Name" />
                </div>

                {/* Email input */}
                <div className="mb-6">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" name="email" placeholder="Email address" />
                </div>
                 
                  {/* phone input */}
                  <div className="mb-6">
                  <input
                  pattern='^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$'
                  required={true}
                  placeholder='Enter Valid Number' value={phone} onChange={(e) => { setphone(e.target.value); setErrorFlag(e.target.checkValidity()); }} type="text" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                {((!phone && phone != null || phone == 0)) ? <div className="text-red-500 text-sm mt-3">
                  Fill with correct format
                </div>
                  :
                  <>
                    {errorFlag ? <p className='text-green-500  text-sm mt-3'>Correct Number</p> : <p className='text-red-500 text-sm mt-3'>Incorrect Number</p>}
                  </>
                }
                </div>
                  {/* sales input */}
                  <div className="mb-6">
                  <input value={sales} onChange={e => setsales(e.target.value)} type="number" name="sales" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" placeholder="Sales" />
                </div>
                <div className="mb-6">
                  {/* <input   onChange={fileSelected} type="file" accept="image"  className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"/> */}
                  <label>
                    <input onChange={fileSelected} type="file" accept="image" className="text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                  </label>
                </div>
             
                <div className="p-2 w-full">
              {name.length === 0 || email.length === 0 || phone.length === 0  || sales< 0  ? <><button disabled={true} className="disabled:bg-sky-100 flex mx-auto bg-transparent text-lg my-2 hover:bg-sky-500 text-sky-700 font-semibold hover:text-sky-500 py-1 px-4 border border-sky-500 hover:border-transparent">Submit</button>
                <div className="text-red-500 text-sm mt-3 text-center">
                 All Feilds Require

                </div>
              </>
                :
                <button className=" flex mx-auto bg-transparent disabled:bg-sky-300 text-lg my-2 hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-1 px-4 border border-sky-500 hover:border-transparent">Submit</button>}

            </div>
              </form>
        </BaseCard>
      </Grid>

    
    </Grid>
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Addagents
