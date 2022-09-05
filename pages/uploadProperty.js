import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'flowbite-react';


const UploadProperty = () => {
  const router = useRouter();
  const [token, settoken] = useState(null)
  const [file, setFile] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()
  const [loading, setloading] = useState(false)


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



  useEffect(() => {
    settoken(Cookies.get('token'))
    setName(Cookies.get('googlename'))
    setEmail((Cookies.get('googleemail')))
  }, [])


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


    formData.append("token", token)
    // console.log(file, file2, file3)

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addProperties2`, {
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
      setloading(true)

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
    <section className="text-gray-600 body-font relative">
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
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Upload Form</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Upload your property dtails for rent, purchase or sale.</p>
        </div>
        {token && <> <form onSubmit={submit} method="POST" encType="multipart/form-data" className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="flex flex-col text-center w-full mb-3">
              <div className="text-start px-4 ml-2 mt-4 p-1 text-white text-lg bg-teal-700">Select the Property type and purpose </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select Category</label>
                <select value={category} onChange={e => setcategory(e.target.value)} type="text" name="category" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-700 text-base pl-3 pr-10 w-full">
                  <option value={'Rent'} >Rent</option>
                  <option value={'Sale'} >Sale</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select Property Type</label>
                <select value={type} onChange={e => setType(e.target.value)} type="text" name="type" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-700 text-base pl-3 pr-10 w-full">
                  <option value={'Homes'} >Homes</option>
                  <option value={'Plots'} >Plots</option>
                  <option value={'Commercial'} >Commercial</option>
                </select>
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative mt-3">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 mr-6">Select Subtype</label>
                {type === 'Homes' && <select value={subtype} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-700 text-base pl-3 pr-10 w-full">
                  <option value={'House'} >House</option>
                  <option value={'Flat'} >Flat</option>
                  <option value={'Upper Portion'} >Upper Portion</option>
                  <option value={'Lower Portion'} >Lower Portion</option>
                  <option value={'Farm House'} >Farm House</option>
                  <option value={'Room'} >Room</option>
                  <option value={'PentHouse'} >PentHouse</option>

                </select>}
                {type === 'Plots' && <select value={subtype} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-700 text-base pl-3 pr-10 w-full">
                  <option value={'Residential Plot'} >Residential Plot</option>
                  <option value={'Commercial Plot'} >Commercial Plot</option>
                  <option value={'Agricultural Land'} >Agricultural Land</option>
                  <option value={'Industrial Land'} >Industrial Land</option>
                  <option value={'Plot File'} >Plot File</option>
                  <option value={'Plot Form'} >Plot Form</option>
                </select>}
                {type === 'Commercial' && <select value={subtype} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-700 text-base pl-3 pr-10 w-full">
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
                <select value={city} onChange={e => setCity(e.target.value)} type="text" name="city" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-700 text-base pl-3 pr-10 w-full">
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
              <div className="text-start px-4 ml-2 mt-4 p-1 px-4 text-white text-lg bg-teal-700">Upload your property details </div>
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Size</label>
              <div className='flex'>
                <div className="flex">
                  <input value={size} onChange={e => setsize(e.target.value)} type="Number" name="size" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /></div>
                <div className='flex'>
                  <select value={unit} onChange={e => setUnit(e.target.value)} type="text" name="unit" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-1 focus:ring-teal-200 focus:border-teal-700 text-base pl-1 pr-2 w-full">
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
                  <span className="inline-flex items-center px-3 text-sm text-white bg-teal-700 rounded-l-md border border-r-0 border-teal-700 dark:bg-teal-700  dark:border-teal-600">
                    PKR.
                  </span>
                  <input value={price} onChange={e => setprice(e.target.value)} type="Number" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Location</label>

                <input value={location} onChange={e => setLocation(e.target.value)} type="text" name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Extra Details</label>

                <input value={desc} onChange={e => setdes(e.target.value)} type="text" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
              <div className="text-start px-4 ml-2 mt-4 p-1 text-white text-lg bg-teal-700">Add extra Features </div>
            </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Bedroom(s)</label>

                  <input value={bed} onChange={e => setBed(e.target.value)} type="Number" name="bed" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Bathrooms(s)</label>

                  <input value={bath} onChange={e => setBath(e.target.value)} type="Number" name="bath" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
              </div>

            </>}

            <div className="flex flex-col text-center w-full mb-3">
              <div className="text-start px-4 ml-2 mt-4 p-1 text-white text-lg bg-teal-700">Contact Person Details </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>

                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Email</label>

                <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Contact Phone</label>
                <input
                  pattern='^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$'
                  errormessage="* Invalid phone Number"
                  required={true}
                  placeholder='Enter Valid Number' value={phone} onChange={(e) => { setPhone(e.target.value); setErrorFlag(e.target.checkValidity()); }} type="text" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


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
              {phone.length === 0 || desc.length === 0 ? <><button disabled={true} className="disabled:bg-teal-100 flex mx-auto bg-transparent text-lg my-2 hover:bg-teal-700 text-teal-700 font-semibold hover:text-teal-700 py-1 px-4 border border-teal-700 hover:border-transparent">Submit</button>
                <div className="text-red-500 text-sm mt-3 text-center">
                  {phone.length === 0 && <p>Phone Number</p>}
                  {desc.length === 0 && <p>Property Details</p>} (Require)

                </div>
              </>
                :
                <button className=" flex mx-auto bg-transparent disabled:bg-teal-300 text-lg my-2 hover:bg-teal-700 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-700 hover:border-transparent">
                {loading && <div className='mx-1'>
                      <Spinner aria-label="Spinner button example"  />
                    </div>}
                Submit</button>}

            </div>

          </div>
        </form>
        </>
        }
        {!token && <div className='container'>
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-xl text-xl font-medium title-font mt-24 mb-2 text-gray-900">Login Require</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-teal-700">Please Login to Post Property Adds.</p>
          </div>
          <Link href={'/login'}>
            <button className=" flex mx-auto bg-transparent text-lg my-2 hover:bg-teal-700 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-700 hover:border-transparent"><AiOutlineUser className='my-1 mx-1' />Login</button>
          </Link>
        </div>}
      </div>
    </section>


  </>
  )
}

export default UploadProperty
