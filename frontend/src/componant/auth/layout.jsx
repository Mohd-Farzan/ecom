import React from 'react'
import { Outlet } from 'react-router-dom'
import bgImg from '../../assets/img/logo.png'
function Authlayout() {
  return (
    <div className='flex min-h-screen w-full'>
        <div className="hidden lg:flex items-center bg-[#f0af80] justify-center w-full bg-cover bg-center " style={{backgroundImage: `url(${bgImg})`}}>
            
        </div>
        <main className="flex items-center justify-center bg-[#edaf82] w-full px-4 py-6 sm:px-6 lg:px-8" >
            <Outlet/>
        </main> 
    </div>
  )
}

export default Authlayout