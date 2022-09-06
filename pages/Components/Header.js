import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import { BsShieldLock } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

import { Navbar, Dropdown, Avatar } from 'flowbite-react';


const Header = ({ user, logout, name, img, email }) => {
  const [headername, setName] = useState(name)
  const [headeremail, setEmail] = useState(email)
  const [headerimg, setImg] = useState(img)


  return (<div className="shadow-md">
    <Navbar
      fluid={true}
      rounded={true}
       
    >
      <Navbar.Brand href={'/'}>
        <img
          src={'/icon.png'}
          className="mr-1 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className=" text- font-semibold dark:text-white">
          Company 
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      {user.value && <>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt="User settings" img={headerimg} rounded={true} />}
        >
         
          <Dropdown.Header>
            <span className="block text-sm">
             {headername}
            </span>
            <span className="block truncate text-sm font-medium">
              {headeremail}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
          <Navbar.Link href={'/myAccount'} >
            My Account
            </Navbar.Link>
          </Dropdown.Item>
          <Dropdown.Item >
          <Navbar.Link href={'/uploadProperty'} >
            Add Property
            </Navbar.Link>
          </Dropdown.Item>
  
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>
            Log out
          </Dropdown.Item>
        </Dropdown>
        </>}
        {!user.value && <><Link href={'/loginadmin'} ><a><button className=' flex mx-auto bg-transparent text-sm my-2 hover:bg-stone-500 text-stone-700 font-semibold hover:text-white py-0 px-1'><BsShieldLock className='mx-1 my-1' />Admin</button></a></Link>
          <Link href={'/login'} ><a>
            <button className=' flex mx-auto bg-transparent text-sm my-2 hover:bg-stone-500 text-stone-700 font-semibold hover:text-white py-0 px-1'><FaRegUserCircle className='mx-1 my-1'/>Login</button>
          </a></Link></>}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      
        <Navbar.Link
         href={'/'}
          active={true}
        >
          HOME
        </Navbar.Link>
        <Navbar.Link href={'/agents'} >
        AGENTS
        </Navbar.Link>
        <Navbar.Link href={'/rent'}>
        RENT
        </Navbar.Link>
        <Navbar.Link href={'/buy'}>
        BUY
        </Navbar.Link>
        <Navbar.Link href={'/services'}>
        SERVICES
        </Navbar.Link>
        <Navbar.Link href={'/contact'}>
        CONTACT
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default Header
