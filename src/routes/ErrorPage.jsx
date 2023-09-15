import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        {/* <img alt='image' className='ml-[25.5rem] mt-[7rem] w-[5rem] h-[8rem] absolute' src =''/> */}
        <p className='text-center text-[12.5rem] font-extrabold mt-[3rem]'>Oops!</p>
        <p className ='text-center text-[1.5rem] font-bold uppercase'>404-page not found...</p>
        <p className ='text-center text-[1rem]'>Please click on the button below </p>
        <div className='grid justify-items-center mt-[1rem]'>
        <button className='rounded bg-sky-700 text-white p-[0.5rem] text-center uppercase self-center'><Link to='/dashboard'>Go to Dashboard</Link></button>
      </div>
    </div>
  )
}

export default ErrorPage
