import React from 'react'
import mongoose from 'mongoose'

const Sample = ({data}) => {
    console.log(data)
  return (
    <div>
     <p>Name: {data.u.name}</p> 
     <p>Email: {data.u.email}</p> 

    </div>
  )
}
export const getServerSideProps = async () => {
    mongoose.connect(process.env.MONGO_URL)
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
    })
    const data = await res.json()

    return {
        props: { data }
    };
    // try-catch removed for simplification
};
export default Sample
