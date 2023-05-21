import React,{useState} from 'react'
import mongoose from 'mongoose'
import Image from 'next/image'

const Agents = ({agent}) => {
  const [agents, setagents] = useState(agent)
  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.</p>
          </div>
         
          <div  className="flex flex-wrap -m-2">     
          {agents.map((a)=>{return(<div key={a._id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-stone-200 border p-4 rounded-lg">
              <div className='px-4'>
                <Image width={70} height={70} alt="team" className="mt-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={a.img}/>
               </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{a.name}</h2>
                  <p className="text-gray-500">{a.email}</p>
                  <p className="text-gray-500">{a.phone}</p>
                </div>
              </div>
            </div>
         
          )})}
          </div>
        </div>
      </div>

    </div>
  )
}

export const getServerSideProps = async (context) => {
  mongoose.connect(process.env.MONGO_URL)
  
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`)
  const agent = await res.json()
 
  console.log("agent data", agent)


  return {
      props: { agent }
  };
  // try-catch removed for simplification
};


export default Agents
