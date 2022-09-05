import React,{useState} from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginadmin = () => {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const router = useRouter()


  const handleadmin = ()=>{
    if (name === 'adminrealestate' && password === 'adminrealestate') {
      router.push('/admin')
    }
    else{
      toast.error('Wrong Credentials', {
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
  return (
  <section className="text-gray-600 body-font h-80vh w-full object-fill " style={{
    backgroundSize: "100% 100%", backgroundImage: `url(${'/h1.jpg'})`,
  }}>
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
  <div className="container px-5 py-24 mx-auto" >
    <div className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-white">ADMIN DASHBOARD LOGIN</h1>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" className="leading-7 text-sm text-white">User Name</label>
        <input value={name} onChange={e=>{setname(e.target.value)}} type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-transparent focus:ring-2 focus:ring-teal-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm text-white">Password</label>
        <input value={password} onChange={e=>{setpassword(e.target.value)}} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-transparent focus:ring-2 focus:ring-teal-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
     
    </div>
    <div className="text-center mt-6">
      <button onClick={handleadmin} className="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600  text-lg">LOGIN</button>
    </div>
  </div>
</section>

  )
}

export default Loginadmin
