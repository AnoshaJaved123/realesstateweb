import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Spinner } from 'flowbite-react';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImg] = useState('')
  const [address, setaddress] = useState('DummyAddress')
  const [pin, setpin] = useState(0)
  const [phone, setphone] = useState(0)
  const [city, setcity] = useState('DummyCity')
  const [state, setstate] = useState('DummyState')
  const [file, setFile] = useState()
  const [loading, setloading] = useState(false)


  const router = useRouter()


  const submit = async event => {
    event.preventDefault()
    setloading(true)
    const formData = new FormData();
    formData.append("image", file)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("password", password)

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signupAPI`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: formData,
    })
    const response2 = await res.json()
    console.log(response2)
    if (response2.success) {
      setloading(false)
      toast.success('Account Created! Now Login', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push('/login')
      }, 1000);
    }
    else {
      toast.error('Account not created. Try again', {
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

  return (
    <div>
      <Head>
        <title>Signup - Real Estate Agency</title>

      </Head>
      <section className=" body-font overflow-hidden">
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
        <div className="px-8 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="item-center">
              <Image className='item-center' src='/icon.png' alt='img' width={400} height={300}></Image>
              <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-teal-600">Real Estate Agency</h1>

            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
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
                {/* Password input */}
                <div className="mb-6">
                  <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" name="password" placeholder="Password" />
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
                <div className="text-center lg:text-left">
                  <button type="submit" className="inline-block bg-transparent text-lg my-2 hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent">
                 
                    {loading && <>
                      <Spinner aria-label="Spinner button example"  />
                    </>}
                    Sign Up
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account.
                    <Link href={'/login'} ><a className="text-teal-600 hover:text-teal-700 focus:text-teal-700 transition duration-200 ease-in-out mx-2">LOG IN</a></Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup