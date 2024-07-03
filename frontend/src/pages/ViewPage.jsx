import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewPage = () => {
    const location = useLocation();
    const data = location.state.data;
  return (
    <div className='w-full'>
      <h1 className="font-[Poppins] text-4xl p-2 m-2 font-semibold text-center text-wrap">To Do Overview</h1>
        <p className="font-[Poppins] text-xl p-2 m-2 font-semibold text-wrap">Title : <span className='font-normal text-wrap'>{data.title}</span></p>
        <p className="font-[Poppins] text-xl p-2 m-2 font-semibold text-wrap">Discription : <span className='font-normal'>{data.msg}</span></p>
    </div>
  )
}

export default ViewPage
