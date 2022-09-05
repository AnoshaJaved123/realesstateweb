import React from "react";
import { Link } from "@mui/material";
import Image from 'next/image'

const LogoIcon = () => {
  return (<>
    <Link href="/">
    <div className="flex">
    <Image src={'/icon.png'} alt='img' width={60} height={40}></Image>
     <h2 className=" text-green-900 mt-4 p-1  text-center text-lg font-semibold">Real Estate Agency</h2>
     </div>
    </Link>
 </> );
};

export default LogoIcon;
