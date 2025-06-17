import React, { useState } from 'react'
import Commonform from '../common/form'
import { useDispatch, useSelector } from 'react-redux'
import { registerFormControls } from '@/config'
import { Toast } from '@/components/ui/toast'
import { ToastDescription } from '@radix-ui/react-toast'

function Profile() {
  const{user}=useSelector((state)=>state.auth)
  const initialState={
      email:user?.email,
      userName:user?.userName,
      age:user?.age,
      password:user?.password
      
  }
    const[FormData,setFormData]=useState(initialState)
    const dispatch=useDispatch()
    function onSubmit(data){
      if(data.payload.success){
       <Toast>
        <ToastDescription>updated</ToastDescription>
       </Toast>
      }
      else{
        <Toast>
        <ToastDescription>unsuccessfull!</ToastDescription>
       </Toast>
      }
    }
  return <div className="flex items-center justify-center gap-2 bg-[#ffecd1]">
    <div className="flex cols-1 flex-col w-full p-5">
        <Commonform
        formControls={registerFormControls}
        formData={FormData}
        setFormData={setFormData}
        onSubmit={onSubmit}

        />
    </div>
  </div>
}

export default Profile