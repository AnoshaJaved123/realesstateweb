import React, { useState } from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import { FaBath, FaBed, FaChartArea } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { MdAdd } from 'react-icons/md';
import Search from './search';
import Image from 'next/image';



const Rent = ({ property }) => {
    const [prop, setprop] = useState(property)
    return (
        <div>
        <Search/>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="flex flex-col text-center w-full mb-3">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-teal-700">Find Properties For Rent</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke  humblebrag.</p>
                            {prop == null && <>
                            <h2 className='text-center text-red-500'>No Property Available</h2>
                        </>}
                        </div>
                     
                        {prop
                            .filter(p => p.category === 'Rent')
                            .map((p) => {
                                return (<div key={p._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link passHref={true} href={`/property/${p._id}`}><a className="block relative h-48 rounded overflow-hidden">
                                        <Image alt="ecommerce" layout='fill' className="hover:scale-125 object-cover object-center w-full h-full block" src={p.img} />
                                    </a></Link>
                                    <div className="mt-4  flex justify-between mx-2">
                                        <h2 className="text-gray-900 title-font text-sm font-medium">{p.subtype} for {p.category}</h2>
                                        <p className="mt-1 text-xs text-black">PKR. {p.price}</p>
                                    </div>

                                    <div className="mt-2 flex justify-between mx-2 ">
                                      

                                        <div className=''>
                                            <FaChartArea className='text-center mx-5 my-1' size={18} />
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.size} {p.unit}</h3>
                                        </div>
                                        {p.type === 'Homes' && <>  <div className=''>
                                            <FaBed className='text-center  my-1' size={18} />
                                            <h3 className="text-gray-500 mx-1 text-xs tracking-widest title-font mb-1">{p.bed} </h3>
                                        </div>
                                            <div className=''>
                                                <FaBath className='text-center  my-1' size={18} />
                                                <h3 className="text-gray-500 mx-1 text-xs tracking-widest title-font mb-1">{p.bath}</h3>
                                            </div>   </>
                                        }
                                        <div className=''>
                                            <GrLocation className='text-center mx- my-1' style={{ color: 'red' }} size={18} />
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.city}</h3>
                                        </div>


                                    </div>
                                    <Link passHref={true} key={p._id} href={`/property/${p._id}`} ><a>
                                        <button className='w-full  bg-transparent text-center items-center my-1 mx-1 hover:bg-teal-700 text-teal-700 font-semibold hover:text-white py-1 px-1 border border-teal-700 hover:border-transparent'>DETAIL</button>
                                    </a></Link>
                                </div>

                                )
                            })}
                        <div className="p-4 justify-center">
                            <Link href={'/uploadProperty'}><a>
                                <div className="h-full flex flex-col items-center text-center">
                                    <MdAdd size={200} color={'#008080'} className='hover:bg-teal-100' />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">Add New Property</h2>                                </div>
                                </div>
                            </a></Link>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export const getServerSideProps = async () => {
    mongoose.connect(process.env.MONGO_URL)
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetchallProperty`, {
    })
    const property = await res.json()

    return {
        props: { property }
    };
    // try-catch removed for simplification
};
export default Rent
