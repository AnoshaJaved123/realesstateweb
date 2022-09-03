import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router';
import Head from 'next/head';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [address, setaddress] = useState('DummyAddress')
 const [pin, setpin] = useState(0)
 const [phone, setphone] = useState(0)
 const [city, setcity] = useState('DummyCity')
 const [state, setstate] = useState('DummyState')

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     router.push('/')
  //   }
  // }, [])
  
  const router = useRouter()
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)

    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)

    } else if (e.target.name == 'password')
      setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = { name, email, password,address, pin, phone, city, state };
    // fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => res.json());


  //   toast.success('Successfuly Sign up', {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });


  //   setName('')
  //   setEmail('')
  //   setPassword('')


  // router.push('/login')

  }

  return (
    <div>
    <Head>
    <title>Signup - Real Estate Agency</title>

    </Head>
      <section className=" body-font overflow-hidden">
        {/* <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
        <div className="px-8 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="item-center">
            <Image className='item-center' src='/icon.png' alt='img' width={400} height={300}></Image>
            <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-teal-600">Real Estate Agency</h1>

            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <h1 className="text-center text-3xl font-semibold mb-5">Sign Up</h1>
                {/* Name input */}
                <div className="mb-6">
                  <input value={name} onChange={handleChange} readOnly={true} type="text" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" name="name" placeholder="Name" />
                </div>

                {/* Email input */}
                <div className="mb-6">
                  <input value={email} onChange={handleChange} readOnly={true} type="email" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" name="email" placeholder="Email address" />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input value={password} onChange={handleChange} type="password" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" name="password" placeholder="********" />
                </div>
                <div className="mb-6">
                  <input value={email} onChange={handleChange} type="email" className="block w-full px-2 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" name="email" placeholder="Email address" />
                </div>
                <div className="text-center lg:text-left">
                <button  onClick={handleSubmit} type="button" className="inline-block bg-transparent text-lg my-2 hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent">
                  Sign Up
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account.
                    <Link href={'/login'} ><a className="text-yellow-600 hover:text-yellow-700 focus:text-yellow-700 transition duration-200 ease-in-out mx-2">LOG IN</a></Link>
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