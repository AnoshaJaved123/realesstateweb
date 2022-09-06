
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Property from '../../modules/Property'
import mongoose from 'mongoose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from 'next/error'
import Cookies from 'js-cookie'
import { Carousel, Tooltip } from 'flowbite-react'
import Image from 'next/image';
// import Carousal from '../carousal';

const Post = ({ property, error }) => {

  const router = useRouter()
  const { slug } = router.query

  const [token, settoken] = useState(null)
  const [item, setitem] = useState(property)

  const form = useRef('');




  useEffect(() => {

    settoken(Cookies.get('token'))

  }, [router.query])


  if (error == 404) {
    return <Error statusCode={404} />
  }

  
  const sendEmail = (e) => {
    e.preventDefault();
    const value = form.current
    emailjs.sendForm('service_k879749', 'template_vpkrhrs', value , 'X4XBTffcoQwhSpWRS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };



  return <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.img} /> */}
          <div className='lg:w-1/2 w-full lg:h-auto h-64'>
            <Carousel>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image
              layout='fill'
               src={item.img}
               alt="..."
              />
              </div>
              <div style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image
              layout='fill'
               src={item.img2}
               alt="..."
              />
              </div>
              <div style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image
              layout='fill'
               src={item.img3}
               alt="..."
              />
              </div>

            </Carousel>
          </div>



          <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-20 w-full md:py-2 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font text-center">Contact Person</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Ask about the Property details through email or whatsapp.</p>
            <div className="relative mb-4">
              <label htmlFor="" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="n" name="n" className="w-full bg-white rounded border border-gray-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4 hidden">
              <label htmlFor={item.name} className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id={item.name} value={item.name} readOnly={true} name="names" className="w-full bg-white rounded border border-gray-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4 hidden">
              <label htmlFor={item.email} className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id={item.email} value={item.email} readOnly={true} name="emails" className="w-full bg-white rounded border border-gray-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4 ">
              <label htmlFor='e' className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="e" name="e" className="w-full bg-white rounded border border-gray-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
            </div>
            <button type="submit" value="Send" className="text-white bg-stone-600 border-0 py-2 px-6 focus:outline-none hover:bg-stone-600 rounded text-lg">Send</button>
          </form>
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Real Estate Agency</h2>
            <div className='flex justify-between'>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{item.subtype}</h1>
              <h1 className="text-stone-600 text-end text-xl title-font font-normal mb-4"> {item.type} for {item.category}</h1>
            </div>
            <div className="flex mb-4">
              <a className="flex-grow border-b-2 border-gray-300 text-stone-600 py-2 text-lg px-1">Details</a>

              <div>

              </div>
            </div>
            <p className="leading-relaxed mb-4">{item.desc}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Location</span>
              <span className="ml-auto text-gray-900">{item.location}, {item.city}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Contact Person</span>
              <span className="ml-auto text-gray-900">{item.name}  ({item.phone})</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">{item.size} {item.unit}</span>
            </div>
            {item.type === 'Homes' && <> <div className="flex border-t border-b mb-2 border-gray-200 py-2">
              <span className="text-gray-500">Bed(s)</span>
              <span className="ml-auto text-gray-900">{item.bed}</span>
            </div>
              <div className="flex mb-6">
                <span className="text-gray-500">Bath(s)</span>
                <span className="ml-auto text-gray-900">{item.bath}</span>
              </div>
            </>}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">PKR. {item.price}</span>
              <div className='flex ml-auto text-end'>
              
              <Tooltip content="Website is on Developer mode" style="light" >
              <button  className=" text-white bg-stone-700 border-0 py-2 px-6 focus:outline-none hover:bg-stone-600 ">SMS</button>

              </Tooltip>
                
              </div>

              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
          {/* <div className=''>

            <Image width={180} height={180}  alt="team" className="text-center rounded-lg w-48 h-48 object-cover object-center sm:mb-2 mb-4 "
              src={item.img} />
            <Image width={180} height={180}  alt="team" className=" rounded-lg w-48 h-48 object-cover object-center sm:mb-2 mb-4"
               src={item.img2} />
            <Image width={180} height={180}  alt="team" className=" rounded-lg w-48 h-48 object-cover object-center sm:mb-2 mb-4"
               src={item.img3}/>
               
          </div> */}


        </div>
      </div>
    </section>


  </>
}
export const getServerSideProps = async (context) => {
  let error = null;

  mongoose.connect(process.env.MONGO_URL)
  let property = await Property.findOne({ _id: context.query.slug })
  if (property == null) {
    return {
      props: { error: 404 }

    }
  }

  return {
    props: { error: error, property: JSON.parse(JSON.stringify(property)) }
  };
  // try-catch removed for simplification
};

export default Post