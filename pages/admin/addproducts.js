import FullLayout from '../../src/layouts/FullLayout'
import theme from '../../src/theme/theme'
import { ThemeProvider } from "@mui/material/styles";
import {
  Grid,} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'flowbite-react';

const Addproducts = () => {
  const router = useRouter();
  const [file, setFile] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()


  const [phone, setPhone] = useState('')
  const [category, setcategory] = useState("Rent")
  const [type, setType] = useState("Homes")
  const [subtype, setSubtype] = useState("House")
  const [city, setCity] = useState("Lahore")
  const [size, setsize] = useState(0)
  const [unit, setUnit] = useState("Square Feet")
  const [price, setprice] = useState(0)
  const [location, setLocation] = useState("Lahore")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setdes] = useState('')
  const [bath, setBath] = useState(0)
  const [bed, setBed] = useState(0)
  const [errorFlag, setErrorFlag] = useState(false);
  const [loading, setloading] = useState(false)





  const submit = async event => {
    event.preventDefault()

    setloading(true)

    const formData = new FormData();
    formData.append("image", file)
    formData.append("image2", file2)
    formData.append("image3", file3)

    formData.append("category", category)
    formData.append("type", type)
    formData.append("subtype", subtype)
    formData.append("city", city)
    formData.append("size", size)
    formData.append("unit", unit)
    formData.append("price", price)
    formData.append("location", location)
    formData.append("phone", phone)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("desc", desc)
    formData.append("bath", bath)
    formData.append("bed", bed)

    // console.log(file, file2, file3)

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addProperties`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        // 'Content-Type': 'multipart/form-data',
        // "Authorization":token
      },
      body: formData
    })
    let result = await res.json();
    console.log(result)
    if (result.success) {
      setloading(false)
      toast.success('Your Property has been uploaded', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setTimeout(() => {
      //         router.push(process.env.NEXT_PUBLIC_HOST)
      // }, 1000); 
    }
    else {
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


  }


  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }
  const fileSelected2 = event => {
    const file2 = event.target.files[0]
    setFile2(file2)

  }
  const fileSelected3 = event => {
    const file3 = event.target.files[0]
    setFile3(file3)

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
  <style jsx global>{`
      Footer {
        display: none;
      }
     `}</style>
  <FullLayout>
  {/* <h2 className='text-center text-2xl font-bold text-gray-700'></h2> */}
  <Grid container spacing={0}>
    <Grid item xs={12} lg={12}>
      <BaseCard title="Add Product">
         <form onSubmit={submit} method="POST" encType="multipart/form-data" className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="flex flex-col text-center w-full mb-3">
              <div className="text-start px-4 ml-2 mt-4 p-1 text-white text-lg bg-sky-500">Select the Property type and purpose </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select Category</label>
                <select value={category} onChange={e => setcategory(e.target.value)} type="text" name="category" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-base pl-3 pr-10 w-full">
                  <option value={'Rent'} >Rent</option>
                  <option value={'Sale'} >Sale</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select Property Type</label>
                <select value={type} onChange={e => setType(e.target.value)} type="text" name="type" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-base pl-3 pr-10 w-full">
                  <option value={'Homes'} >Homes</option>
                  <option value={'Plots'} >Plots</option>
                  <option value={'Commercial'} >Commercial</option>
                </select>
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select Subtype</label>
                {type === 'Homes' && <select value={subtype} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-base pl-3 pr-10 w-full">
                  <option value={'House'} >House</option>
                  <option value={'Flat'} >Flat</option>
                  <option value={'Upper Portion'} >Upper Portion</option>
                  <option value={'Lower Portion'} >Lower Portion</option>
                  <option value={'Farm House'} >Farm House</option>
                  <option value={'Room'} >Room</option>
                  <option value={'PentHouse'} >PentHouse</option>

                </select>}
                {type === 'Plots' && <select value={subtype} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-base pl-3 pr-10 w-full">
                  <option value={'Residential Plot'} >Residential Plot</option>
                  <option value={'Commercial Plot'} >Commercial Plot</option>
                  <option value={'Agricultural Land'} >Agricultural Land</option>
                  <option value={'Industrial Land'} >Industrial Land</option>
                  <option value={'Plot File'} >Plot File</option>
                  <option value={'Plot Form'} >Plot Form</option>
                </select>}
                {type === 'Commercial' && <select value={subtype} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-base pl-3 pr-10 w-full">
                  <option value={'Office'} >Office</option>
                  <option value={'Shop'} >Shop</option>
                  <option value={'Warehouse'} >Warehouse</option>
                  <option value={'Factory'} >Factory</option>
                  <option value={'Building'} >Building</option>
                  <option value={'Other'} >Other</option>
                </select>}

              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select City</label>
                <select value={city} onChange={e => setCity(e.target.value)} type="text" name="city" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-base pl-3 pr-10 w-full">
                  <option value={'Lahore'} >Lahore</option>
                  <option value={'Karachi'} >Karachi</option>
                  <option value={'Islamabad'} >Islamabad</option>
                  <option value={'Sailkot'} >Sailkot</option>
                  <option value={'Hydrabad'} >Hydrabad</option>
                  <option value={'Pindi'} >Pindi</option>
                  <option value={'Okara'} >Okara</option>
                  <option value={'Gilgit'} >Gilgit</option>

                </select>
              </div>
            </div>
            <div className="flex flex-col text-center w-full mb-3">
              <div className="text-start px-4 ml-2 mt-4 p-1 px-4 text-white text-lg bg-sky-500">Upload your property details </div>
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Size</label>
              <div className='flex'>
                <div className="flex">
                  <input value={size} onChange={e => setsize(e.target.value)} type="Number" name="size" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /></div>
                <div className='flex'>
                  <select value={unit} onChange={e => setUnit(e.target.value)} type="text" name="unit" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-1 focus:ring-sky-200 focus:border-sky-500 text-base pl-1 pr-2 w-full">
                    <option value={'Square Feet'} >Square Feet</option>
                    <option value={'Square Yards'} >Square Yards</option>
                    <option value={'Square Meters'} >Square Meters</option>
                    <option value={'Marla'} >Marla</option>
                    <option value={'Canal'} >Canal</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Price</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-white bg-sky-500 rounded-l-md border border-r-0 border-sky-500 dark:bg-sky-500  dark:border-sky-600">
                    PKR.
                  </span>
                  <input value={price} onChange={e => setprice(e.target.value)} type="Number" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Location</label>

                <input value={location} onChange={e => setLocation(e.target.value)} type="text" name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Extra Details</label>

                <input value={desc} onChange={e => setdes(e.target.value)} type="text" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {(!desc && desc != null || desc.length === 0) && <div className="text-red-500 text-sm mt-3">
                  Please provide the details about your Property
                </div>}
              </div>
            </div>


            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Upload Image</label>
                <div className='flex mb-2'>
                  <p>1.
                    <label>
                      <input onChange={fileSelected} type="file" name='image' accept="image" className="mx-2 text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                    </label>

                  </p></div>
                <div className='flex mb-2'>
                  <p>2.
                    <label>
                      <input onChange={fileSelected2} type="file" name='image2' accept="image" className="mx-2 text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                    </label>
                  </p></div>
                <div className='flex'>
                  <p>3.
                    <label>
                      <input onChange={fileSelected3} type="file" name='image3' accept="image" className="mx-2 text-sm text-grey-500
                      file:mr-3 file:py-1 file:px-4
                      file:rounded-none file:border-0
                      file:text-lg file:font-normal  file:text-white
                      file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                      hover:file:cursor-pointer hover:file:opacity-80
                       " />
                    </label>
                  </p></div>
              </div>
            </div>
            {type === 'Homes' && <>  <div className="flex flex-col text-center w-full mb-3">
              <div className="text-start px-4 ml-2 mt-4 p-1 text-white text-lg bg-sky-500">Add extra Features </div>
            </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Bedroom(s)</label>

                  <input value={bed} onChange={e => setBed(e.target.value)} type="Number" name="bed" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Bathrooms(s)</label>

                  <input value={bath} onChange={e => setBath(e.target.value)} type="Number" name="bath" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
              </div>

            </>}

            <div className="flex flex-col text-center w-full mb-3">
              <div className="text-start px-4 ml-2 mt-4 p-1 text-white text-lg bg-sky-500">Contact Person Details </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>

                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Email</label>

                <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Contact Phone</label>
                <input
                  pattern='^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$'
                  
                  required={true}
                  placeholder='Enter Valid Number' value={phone} onChange={(e) => { setPhone(e.target.value); setErrorFlag(e.target.checkValidity()); }} type="text" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                {((!phone && phone != null || phone == 0)) ? <div className="text-red-500 text-sm mt-3">
                  Fill with correct format
                </div>
                  :
                  <>
                    {errorFlag ? <p className='text-green-500  text-sm mt-3'>Correct Number</p> : <p className='text-red-500 text-sm mt-3'>Incorrect Number</p>}
                  </>
                }

              </div>
            </div>
            <div className="p-2 w-full">
              {phone.length === 0 || desc.length === 0 || name.length === 0  || email.length === 0  ? <><button disabled={true} className="disabled:bg-sky-100 flex mx-auto bg-transparent text-lg my-2 hover:bg-sky-500 text-sky-700 font-semibold hover:text-sky-500 py-1 px-4 border border-sky-500 hover:border-transparent">Submit</button>
                <div className="text-red-500 text-sm mt-3 text-center">
                  {phone.length === 0 && <p>Phone Number</p>}
                  {desc.length === 0 && <p>Property Details</p>} (Require)

                </div>
              </>
                :
                <button className=" flex mx-auto bg-transparent disabled:bg-sky-300 text-lg my-2 hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-1 px-4 border border-sky-500 hover:border-transparent">  {loading && <>
                      <Spinner aria-label="Spinner button example" className="mx-1"  />
                    </>}Submit</button>}

            </div>

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

export default Addproducts
