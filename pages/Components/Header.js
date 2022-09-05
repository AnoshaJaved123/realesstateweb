import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import { GrUserAdmin } from 'react-icons/gr';


const Header = ({ user, logout, name, img }) => {
  const [headername, setName] = useState(name)
  const [headerimg, setImg] = useState(img)
  const [dropdown, setdropdown] = useState(false)


  return (
    <div className='navbar relative z-10 flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0  bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
      <div className="logo mr-auto md:mx-5">
        <Link href={'/'}><a><Image src={'/icon.png'} alt='img' width={70} height={40}></Image></a></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-3 font-normal md:text-lg'>
          <Link href={'/'}><a className=" font-semibold hover:text-teal-700 text-black" >HOME</a></Link>
          <Link href={'/agents'}><a className=" font-semibold hover:text-teal-700 text-black" >AGENTS</a></Link>
          <Link href={'/services'}><a className=" font-semibold hover:text-teal-700 text-black" >SERVICES</a></Link>
          <Link href={'/rent'}><a className=" font-semibold hover:text-teal-700 text-black" >RENT</a></Link>
          <Link href={'/buy'}><a className=" font-semibold hover:text-teal-700 text-black" >BUY</a></Link>
          <Link href={'/contact'}><a className=" font-semibold hover:text-teal-700 text-black" >CONTACT</a></Link>

        </ul>
      </div>



      <div className="cursor-pointer items-center cart absolute right-0 mx-4 flex">
        <span onMouseOver={() => { setdropdown(true) }} onMouseLeave={() => { setdropdown(false) }}>
          {dropdown && <div onMouseOver={() => { setdropdown(true) }} onMouseLeave={() => { setdropdown(false) }} className='absolute right-10 bg-white shadow-md font-semibold top-8 px-5 py-4 w-32  '>
            <ul>
              <a href={'/myAccount'}> <li className='py-1 text-sm hover:text-sky-700'>My Account</li></a>
              <a href={'/uploadProperty'}><li className='py-1 text-sm hover:text-sky-700'>Add Property</li></a>
              <li onClick={logout} className='py-1 text-sm hover:text-sky-700'>Log Out</li>
            </ul>

          </div>}
          {user.value && <> <div className='flex flex-wrap '><p className='mx-2 my-1 p-1 text-teal-700'>{headername}</p>
            <Image alt='realestate' referrerPolicy="no-referrer" width={40} height={40} className="w-9 h-9 md: mr-5 object-cover object-center rounded-full inline-block" src={headerimg} />
          </div></>
          }
        </span>
        {!user.value && <><Link href={'/loginadmin'} ><a><div className='flex mx-5 p-1'><GrUserAdmin className='mx-2' /><p className='text-sm text-stone-600'>Admin</p></div></a></Link>
          <Link href={'/login'} ><a>
            <button className=' flex mx-auto bg-transparent text-sm my-1 mx-2 hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-0 px-1 border border-teal-500 hover:border-transparent'>Login</button>
          </a></Link></>}




        </div>



        </div>
  )
}

        export default Header
