
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Property from '../../modules/Property'
import mongoose from 'mongoose'
import Error from 'next/error'
import Link from 'next/link';
import { FaBath, FaBed, FaChartArea } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import Image from 'next/image'

const Display = ({ property, error,pbyCity }) => {

  const router = useRouter()
  const { category } = router.query

  const [item, setitem] = useState(property)
  const [byCity, setbyCity] = useState(pbyCity)




  useEffect(() => {
console.log('item',item)

  }, [router.query])


  if (error == 404) {
    return <Error statusCode={404} />
  }




  return <>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                       

                        {item
                            .map((p) => {
                                return (<div key={p._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link passHref={true} href={`/property/${p._id}`}><a className="block relative h-48 rounded overflow-hidden">
                                        <Image layout='fill' alt="ecommerce" className="hover:scale-125 object-cover object-center w-full h-full block" src={p.img} />
                                    </a></Link>
                                    <div className="mt-4  flex justify-between mx-2">
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{p.subtype} for {p.category}</h2>
                                        <p className="mt-1 text-black">PKR. {p.price}</p>
                                    </div>

                                    <div className="mt-2 flex justify-between mx-5 ">
                                        {p.category === 'Homes' && <>  <div className=''>
                                            <FaBed className='text-center mx-3 my-1' size={23} />
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.bed} Beds(s)</h3>
                                        </div>
                                            <div className=''>
                                                <FaBath className='text-center mx-3 my-1' size={21} />
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.bath} Bath(s)</h3>
                                            </div>   </>
                                        }


                                        <div className=''>
                                            <GrLocation className='text-center mx- my-1' color='gray' size={22} />
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.city}</h3>
                                        </div>

                                        <div className=''>
                                            <FaChartArea className='text-center mx-5 my-1' size={22} />
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.size} {p.unit}</h3>
                                        </div>
                                    </div>
                                    <Link passHref={true} key={p._id} href={`/property/${p._id}`} ><a>
                                        <button className='w-full  bg-transparent text-center items-center my-1 mx-1 hover:bg-stone-500 text-stone-700 font-semibold hover:text-white py-1 px-1 border border-stone-500 hover:border-transparent'>DETAIL</button>
                                    </a></Link>
                                </div>

                                )
                            })}
                      
                    </div>

                </div>
            </section>
         

  </>
}
export const getServerSideProps = async (context) => {
  let error = null;
console.log(context.query)
  mongoose.connect(process.env.MONGO_URL)
  let property = await Property.find(
    { category: context.query.category, type: context.query.type , subtype: context.query.subtype , city: context.query.city },

    )
  if (property == null) {
    return {
      props: { error: 404 }

    }
  
  }
  console.log("property",property)

  let pbyCity = await Property.find(
    { city: context.query.city },

    )
  return {
    props: { error: error, property: JSON.parse(JSON.stringify(property)),pbyCity:JSON.parse(JSON.stringify(pbyCity)) }
  };
  // try-catch removed for simplification
};

export default Display