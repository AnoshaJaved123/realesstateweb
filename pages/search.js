import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React, { useState } from 'react';
const Search = () => {
    const [category, setcategory] = useState("Rent")
    const [type, setType] = useState("Homes")
    const [subtype, setSubtype] = useState("House")
    const [city, setCity] = useState("Lahore")

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex  lg:w-full flex-wrap items-center text-base md:ml-auto bg-stone-100">
                        <div className="flex-grow mx-2 my-2 ">
                            <label htmlFor="name" className="leading-7 text-sm text-black mx-2">Select Category</label>
                            <select value={category} onChange={e => setcategory(e.target.value)} type="text" name="category" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-black pl-3 pr-10 w-full">
                                <option value={'Rent'} >Rent</option>
                                <option value={'Sale'} >Sale</option>
                            </select>
                        </div>
                        <div className="flex-grow mx-2 my-2 ">
                            <label htmlFor="name" className="leading-7 text-sm text-black mx-2">Select Property Type</label>
                            <select value={type} onChange={e => setType(e.target.value)} type="text" name="type" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-black pl-3 pr-10 w-full">
                                <option value={'Homes'} >Homes</option>
                                <option value={'Plots'} >Plots</option>
                                <option value={'Commercial'} >Commercial</option>
                            </select>
                        </div>
                        <div className="flex-grow mx-2 my-2  ">
                            <label htmlFor="name" className="leading-7 text-sm text-black mx-2">Select Subtype</label>
                            {type === 'Homes' && <> <select value={type} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-black pl-3 pr-10 w-full">
                                <option value={'House'} >House</option>
                                <option value={'Flat'} >Flat</option>
                                <option value={'Upper Portion'} >Upper Portion</option>
                                <option value={'Lower Portion'} >Lower Portion</option>
                                <option value={'Farm House'} >Farm House</option>
                                <option value={'Room'} >Room</option>
                                <option value={'PentHouse'} >PentHouse</option>

                            </select></>}
                            {type === 'Plots' && <> <select value={type} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-black pl-3 pr-10 w-full">
                                <option value={'Residential Plot'} >Residential Plot</option>
                                <option value={'Commercial Plot'} >Commercial Plot</option>
                                <option value={'Agricultural Land'} >Agricultural Land</option>
                                <option value={'Industrial Land'} >Industrial Land</option>
                                <option value={'Plot File'} >Plot File</option>
                                <option value={'Plot Form'} >Plot Form</option>
                            </select></>}
                            {type === 'Commercial' && <> <select value={type} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-black pl-3 pr-10 w-full">
                                <option value={'Office'} >Office</option>
                                <option value={'Shop'} >Shop</option>
                                <option value={'Warehouse'} >Warehouse</option>
                                <option value={'Factory'} >Factory</option>
                                <option value={'Building'} >Building</option>
                                <option value={'Other'} >Other</option>
                            </select></>}
                        </div>

                        <div className="flex-grow mx-2 my-2">
                            <label htmlFor="name" className="leading-7 text-sm text-black mx-2">Select City</label>
                            <select value={city} onChange={e => setCity(e.target.value)} type="text" name="city" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-black pl-3 pr-10 w-full">
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
                        <Link
                            href={{
                                pathname: `/display/${category}`,
                                query: {
                                    category: category,
                                    type: type,
                                    subtype: subtype,
                                    city: city,


                                }
                            }}

                        >
                            <a> <button className="text-white mt-6 mx-4 py-1 bg-black border-0  px-4 focus:outline-none hover:bg-gray-400  text-sm">Find</button></a></Link>
                    </div>


                </div>
            </header>
        </div>
    )
}

export default Search
