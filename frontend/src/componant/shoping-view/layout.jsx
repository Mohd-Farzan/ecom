import React from 'react'
import ShopingHeader from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

function Shoplayout() {
  return (
    <div className=" flex min-h-screen w-full">
      {/* <ShopingSidebar/> */}
      <div className="flex flex-1 w-full flex-col">
        <ShopingHeader/>
        <main className='flex-1 flex-col  p/4 md:p-6 '>
          <Outlet/>
        </main>
        <div className="flex flex-col w-full bg-[#edaf82] p-10 ">
        <Footer/>
       </div>
    </div>
    </div>
    

  )
}

export default Shoplayout