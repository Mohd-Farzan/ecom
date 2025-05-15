import React from 'react'
import ShopingHeader from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

function Shoplayout() {
  return (
    <div className=" flex min-h-screen w-full ">
      {/* <ShopingSidebar/> */}
      <div className="flex flex-1 w-full flex-col">
        <ShopingHeader/>
        <main className='flex-1 flex-col w-full p/4 md:p-6 bg-[#f0ece6b0]'>
          <Outlet/>
        </main>
        <div className="flex flex-col w-full bg-[#ffecd1] p-10 ">
        <Footer/>
       </div>
    </div>
    </div>
    

  )
}

export default Shoplayout