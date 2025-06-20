import React from 'react'
import Address from '../../componant/shoping-view/address'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsContent from '../../componant/shoping-view/cart-items-content'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { createNewOrder } from '@/store/shop/order-slice'
import { Navigate, useNavigate } from 'react-router-dom'
import { SelectSeparator } from '@/components/ui/select'
function ShopingCheackout() {
  const {cartItems}=useSelector((state)=>state.ShopingCart)
  const{ approvalURL}=useSelector((state)=>state.shoppingOrder)
  const{user}=useSelector((state)=>state.auth)
  const[currentSelectedAddress,setCurrentSelectedAddress]=useState(null)
  const[isPaymentStart,setIspaymentStart]=useState(false)
  const navigate=useNavigate()
  const frontendTotal = cartItems && cartItems.items && cartItems.items.length > 0
  ? cartItems.items.reduce(
      (sum, currentItem) =>
        sum +
        (currentItem?.salePrice > 0
          ? currentItem?.salePrice
          : currentItem?.price) * currentItem?.quantity,
      0
    )
  : 0;
  const dispatch=useDispatch()
// console.log(currentSelectedAddress,'address')
  function handleInitiatePapalPayment(){
      const orderData={
        userId:user?.id,
        cartId:cartItems._id,
        cartItems:cartItems.items.map(singleartItem=>({
        productId:singleartItem?.productId,
        title:singleartItem?.title,
        image:singleartItem?.image,
        price:singleartItem?.price,
        salePrice:singleartItem?.salePrice > 0 ? singleartItem?.salePrice:singleartItem?.price,
        quantity:singleartItem?.quantity
      })),
      addressInfo:{
            addressId:currentSelectedAddress?._id,
            address:currentSelectedAddress?.address,
            city:currentSelectedAddress?.city,
            pincode:currentSelectedAddress?.pincode,
            phone:currentSelectedAddress?.phone,
      },
      orderStatus : 'pending',
      paymentMethod :'paypal',
      paymentStatus : 'pending',
      totalAmmount : frontendTotal,
      orderDate: new Date(),
      orderUpdateDate : new Date(),
      paymentId:'',
      payerId:'',
      
      
  };
  dispatch(createNewOrder(orderData)).then((data)=>{
    if(data.payload?.success){
      const serverValidatedTotal = data.payload?.totalAmount;
    console.log("Server-validated total:", serverValidatedTotal);
      setIspaymentStart(true)
    }
    else{
      setIspaymentStart(false)
    }
  });
  // console.log(orderData);
}
if( approvalURL){
    window.location.href=approvalURL
    alert('please wait to redirect to payment');
    
    if(setIspaymentStart){
      alert('payment is succefull')
    }
}

  
  return <div className="flex flex-col justify-between ">
    <div className="relative bg-[#f5e59c] bg-opacity-40 p-5 w-full overflow-hidden">
     <h1 className='font-semibold text-3xl'>Checkout Page</h1>
    </div>
    <SelectSeparator className='bg-zinc-700 my-4'/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5 p-5 border rounded ">
      <Address setCurrentSelectedAddress={setCurrentSelectedAddress}  />
      <div className="flex flex-col gap-4 border border-r-2 rounded p-10 bg-[#ffecd1] ">
        {
          cartItems && cartItems.items &&cartItems.items.length > 0 ? cartItems.items.map(item=> <CartItemsContent cartItem={item}/>):null
        }
        <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
            <span className='font-bold'>Total</span>
            <span className='font-bold'>${frontendTotal}</span>
        </div>
      </div>
      <div className='mt-4 w-full '>
        <Button  onClick={handleInitiatePapalPayment}className='w-full'>Pay</Button>
      </div>
      </div>
      
    </div>
  </div>
}


export default ShopingCheackout