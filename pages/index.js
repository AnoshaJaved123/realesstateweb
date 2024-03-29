import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React, { useState } from 'react';
import Image from 'next/image'
export default function Home() {
  const [category, setcategory] = useState("Rent")
  const [type, setType] = useState("Homes")
  const [subtype, setSubtype] = useState("House")
  const [city, setCity] = useState("Lahore")



  return (
    <div className=''>
      <Head>
        <title>Real Estate App</title>
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <Script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"/>
      <div className='px-0 h-80vh w-full object-fill' style={{
        backgroundSize: "100% 100%", backgroundImage: `url(${'/h1.jpg'})`,
      }}>
        <div className="text-black body-font">
          <div className=" px-5 py-5 mx-auto ">
            <div className="flex flex-col text-center lg:my-40 ">
              <div className="backdrop-opacity-10 backdrop-invert bg-white/80 py-3  flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-3 ">
                <div className="relative flex-grow ">
                  <label htmlFor="name" className="leading-7 text-sm font-semibold text-black">Select Category</label>
                  <select value={category} onChange={e => setcategory(e.target.value)} type="text" name="category" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-700 text-black pl-3 pr-10 w-full">
                    <option value={'Rent'} >Rent</option>
                    <option value={'Sale'} >Sale</option>
                  </select>
                </div>
                <div className="relative flex-grow ">
                  <label htmlFor="name" className="leading-7 text-sm font-semibold text-black">Select Property Type</label>
                  <select value={type} onChange={e => setType(e.target.value)} type="text" name="type" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-700 text-black pl-3 pr-10 w-full">
                    <option value={'Homes'} >Homes</option>
                    <option value={'Plots'} >Plots</option>
                    <option value={'Commercial'} >Commercial</option>
                  </select>
                </div>
                <div className="relative flex-grow ">
                  <div>
                    <label htmlFor="name" className="leading-7 text-sm font-semibold text-black">Select Subtype</label>
                    {type === 'Homes' && <> <select value={type} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-700 text-black pl-3 pr-10 w-full">
                      <option value={'House'} >House</option>
                      <option value={'Flat'} >Flat</option>
                      <option value={'Upper Portion'} >Upper Portion</option>
                      <option value={'Lower Portion'} >Lower Portion</option>
                      <option value={'Farm House'} >Farm House</option>
                      <option value={'Room'} >Room</option>
                      <option value={'PentHouse'} >PentHouse</option>

                    </select></>}
                    {type === 'Plots' && <> <select value={type} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-700 text-black pl-3 pr-10 w-full">
                      <option value={'Residential Plot'} >Residential Plot</option>
                      <option value={'Commercial Plot'} >Commercial Plot</option>
                      <option value={'Agricultural Land'} >Agricultural Land</option>
                      <option value={'Industrial Land'} >Industrial Land</option>
                      <option value={'Plot File'} >Plot File</option>
                      <option value={'Plot Form'} >Plot Form</option>
                    </select></>}
                    {type === 'Commercial' && <> <select value={type} onChange={e => setSubtype(e.target.value)} type="text" name="subtype" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-700 text-black pl-3 pr-10 w-full">
                      <option value={'Office'} >Office</option>
                      <option value={'Shop'} >Shop</option>
                      <option value={'Warehouse'} >Warehouse</option>
                      <option value={'Factory'} >Factory</option>
                      <option value={'Building'} >Building</option>
                      <option value={'Other'} >Other</option>
                    </select></>}
                  </div>
                </div>
                <div className="relative flex-grow">
                  <label htmlFor="name" className="leading-7 text-sm font-semibold text-black">Select City</label>
                  <select value={city} onChange={e => setCity(e.target.value)} type="text" name="city" className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-700 text-black pl-3 pr-10 w-full">
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

                <div className='items-center'>

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
                    <a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-400  text-lg">Find</button></a></Link>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>


      <section className="text-black body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="container mx-auto px-4">

            <div>
              <section className="py-8 px-4">
                <div className="flex flex-wrap -mx-4">
                <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-stone-700">Real Estate Projects</h1>
            <p className="lg:w-2/3 mx-auto leading-7elaxed text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-6">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">For Rent</h1>
                      <p className="mx-5 text-gray-800 text-lg">Find resonable properties according to your requirement for rent.</p>
                      <Link href={'/rent'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/h9.jpg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-6">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">Buy Property</h1>
                      <p className="mx-5 text-gray-800 text-lg">Find resonable properties according to your requirement.</p>
                      <Link href={'/buy'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/h2.jpg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">Services</h1>
                      <p className="mx-5 text-gray-800 text-lg">We provide you services according to your project requirement.</p>
                      <Link href={'/services'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/h13.jpg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                  <div className="relative md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <h1 className="tracking-wider text-3xl font-semibold text-black">Find Agent</h1>
                      <p className="mx-5 text-gray-800 text-lg">Contact with our agents.</p>
                      <Link href={'/agents'}><a> <button className="text-white mt-6 bg-stone-700 border-0 py-1 px-8 focus:outline-none hover:bg-stone-00  text-lg">Find</button></a></Link>
                    </div>
                    <div className="relative">
                      <div className=" flex flex-wrap content-center">
                        <Image className="rounded shadow-md" src={'/h3.jpeg'} width={768} height={400} alt='any' />

                      </div>
                    </div>

                  </div>
                </div>
              </section>

            </div>

          </div>

        </div>
      </section>

      <section className="text-black body-font bg-gray-50">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-stone-700">Real Estate Projects</h1>
            <p className="lg:w-2/3 mx-auto leading-7elaxed text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-2 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-stone-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">342</h2>
                <p className="leading-7elaxed">Available Properties</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-stone-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">53</h2>
                <p className="leading-7elaxed">Employees</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-stone-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">25</h2>
                <p className="leading-7elaxed">Agents (24/7 Help Service)</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-stone-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">12</h2>
                <p className="leading-7elaxed">New Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black body-font">
        <div className="container px-5 py-14 mx-auto">
          <h1 className="text-center sm:text-3xl text-3xl font-medium title-font mb-6 text-stone-700">TESTIMONIALS</h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <Image  width={40} height={40} alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8-616x431.jpg" /> */}
                <Image width={100} height={100} alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={'/u2.jpg'} />

                <p className="leading-7elaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-stone-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Government Employer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <Image width={40} height={40}  alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /> */}
                <Image width={100} height={100} alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={'/u1.jpg'} />
                <p className="leading-7elaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-stone-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">Business Man</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                {/* <Image width={40} height={40}  alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /> */}
                <Image width={100} height={100} alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={'/u3.jpg'} />
                <p className="leading-7elaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-stone-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}


