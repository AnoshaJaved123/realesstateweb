import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
var jwt = require('jsonwebtoken');
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

const Login = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [ename, seteName] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [picurl, setPicurl] = useState('')
  const [user, setUser] = useState({})
  const router = useRouter()

  const responseGoogle = async (response) => {
    //  console.log(response);
    localStorage.setItem('googletoken', response.token);
    const userObject = jwt_decode(response.credential);
    // console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    const { name, sub, picture, email } = userObject;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };
    setName(name)
    setEmail(email)
    //  setPicurl(doc.image)
    //  console.log("name",name)
    //  console.log("email",email)
    //  console.log("doc",doc)
    //  console.log("doc.image",doc.image)
    //  console.log("picurl",picurl)

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signupgoogle`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify({
        name: name,
        email: email,
        img: doc.image
      })
    })
    const response2 = await res.json()
    if (response2.success) {
      Cookies.set('token',response2.token)
      localStorage.setItem('token',response2.token)
      Cookies.set('googleimg',doc.image)
      Cookies.set('googlename',name)
      Cookies.set('googleemail',email)
      toast.success('Successfuly Logged In', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
              router.push(process.env.NEXT_PUBLIC_HOST)
      }, 1000); 
    }
    else{
      toast.error(response.error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
    }
  
      setName('')
      setEmail('')

  }

  const handleChange = (e) => {
    if (e.target.name == 'ename') {
      seteName(e.target.value)

    }
    else if (e.target.name == 'mail') {
      setMail(e.target.value)

    } else if (e.target.name == 'password')
      setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { mail, password };
    // console.log(data)

 
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    // console.log(response)

    if (response.success) {
      localStorage.setItem('token',response.token)
      localStorage.setItem('token',response.token)
      localStorage.setItem('username',response.name)
      localStorage.setItem('useremail',response.email)
      Cookies.set('token',response.token)
      Cookies.set('googleimg',response.img)
      Cookies.set('googlename',response.name)
      Cookies.set('googleemail',response.email)

        toast.success('Successfuly Logged In', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
            router.push(process.env.NEXT_PUBLIC_HOST)
    }, 1000); 
  }
  else{
    toast.error(response.error, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); 
  }


    setMail('')
    setPassword('')
  }




  return (
    <div>
      <Head>
        <title>Login - Real Estate Agency</title>

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
              <form>

                <h1 className="text-center text-3xl font-semibold mb-5">Login</h1>
                {/* Email input */}
                <div className="mb-6">
                  <input value={mail} onChange={handleChange} type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="mail" placeholder="Email" />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input value={password} onChange={handleChange} type="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="password" placeholder="Password" />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                  <p className="text-gray-800">
                    Do not have an account?
                    <Link href={'/signup'} ><a className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out mx-2">SIGN UP</a></Link>
                  </p>
                  </div>
                  {/* <Link href={'/forgot?token=123'} className="text-gray-800">Forgot password?</Link> */}
                </div>
                <div className="ml-5 flex flex-wrap text-center lg:text-left">
                  <button type="button" onClick={handleSubmit} className="inline-block bg-transparent text-lg my-8 hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent">
                    Login
                  </button>
                  <div className='mt-10 mr-5 ml-5'>--OR--</div>
                  <div className='mt-8'>
                    <GoogleLogin
                      render={(renderProps) => (
                        <button
                          type="button"
                          className=""
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <FcGoogle className="" /> Sign in with google
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy="single_host_origin"
                    />
                  </div>

                </div>
                </form>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Login