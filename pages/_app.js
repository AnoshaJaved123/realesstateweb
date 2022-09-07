import '../styles/globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Cookies from 'js-cookie'
import { googleLogout } from '@react-oauth/google';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState({ value: null })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [img, setImg] = useState('')


  const [key, setkey] = useState(0)
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    console.log('use effect running')
    const token = Cookies.get('token')

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    if (token) {
      setuser({ value: token })
      setName(Cookies.get('googlename'))
      setEmail(Cookies.get('useremail'))
      setImg(Cookies.get('googleimg'))
    }
    setkey(Math.random())
  }, [router.query])

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('googlename')
    Cookies.remove('useremail')
    Cookies.remove('googleemail')
    Cookies.remove('googleimg')
    localStorage.clear();
     googleLogout();
    localStorage.removeItem('user')
    setuser({ value: null })
    setkey(Math.random())
    router.push('/')
  }


  return <>
    <Script
      src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
      strategy="beforeInteractive"
    />
    <GoogleOAuthProvider clientId="1097122749837-uvs88brd5o75cutojhbo37275gs54r47.apps.googleusercontent.com">

      {key && <Header
        key={key}
        logout={logout}
        user={user}
        name={name}
        email={email}
        img={img}
      />}
      <LoadingBar
        color='#008080'
        waitingTime={400}
        shadow={true}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component
        user={user}
        name={name}
        {...pageProps} />
      <Footer />
    </GoogleOAuthProvider>;
  </>
}

export default MyApp
