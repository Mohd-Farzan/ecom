import React, { useEffect, useState } from 'react'
import book1 from '../../assets/img/download.jpeg'
import book2 from '../../assets/img/images.jpeg'
import book3 from '../../assets/img/slide2.jpeg'
import { Button } from '@/components/ui/button'
import { BabyIcon, ChevronLeftIcon, ChevronRightIcon,  ShirtIcon, ShovelIcon, SquareXIcon, WatchIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FatchAllFilterProduct, fetchProductDetails } from '@/store/shop/products-slice'
import { useDispatch, useSelector } from 'react-redux'
import ShopingProductTile from '@/componant/shoping-view/product-tile'
import { useNavigate } from 'react-router-dom'
import { addToCartItems, fetchCart } from '@/store/shop/cart-slice'
import ProductDetailsDialog from '@/componant/shoping-view/product-details'
import { Toast, ToastDescription, ToastProvider, ToastViewport } from '@/components/ui/toast'

function ShopingHome() {
    const{productList,productDetails} = useSelector((state)=>state.ShopProducts)
    const{user} = useSelector((state)=>state.auth)
    const [currentSlide,setCurrentSlide]=useState(0);
    const slides=[book1,book2,book3];
    const[openDetailsDialog,setOpenDetailsDialog]=useState(false)
    const [toastMessage, setToastMessage] = useState(null); // Toast message state
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const categories=[

        {id:"lehenga",label:"Lehenga", icon:ShirtIcon},
        {id:"garara",label:"Garara" ,icon:ShirtIcon},
        {id:"sharara",label:"Sharara" ,icon:ShirtIcon},
        {id:"weddingSuit",label:"Wedding Suit", icon:ShirtIcon},
        {id:"cottonSuit",label:"Cotton Suit" ,icon:ShirtIcon},
        {id:"woollenSuit",label:"Woollen Suit" ,icon:ShirtIcon},
        {id:"readymateSuit",label:"Ready Mate Suit" ,icon:ShirtIcon},
        {id:"jaipuriSuit",label:"Jaipuri Suit" ,icon:ShirtIcon},
        {id:"chunriSuit",label:"Chunri Suit", icon:ShirtIcon}
    ];
    function handleNavigateToListingPage(getCurrentItem,section){
        sessionStorage.removeItem('filters');
        const currentFilter={
            [section]:[getCurrentItem.id]
        }
        sessionStorage.setItem('filters',JSON.stringify(currentFilter ));
        navigate(`/shop/list`)

    }
    function handleAddToCart(productId) {
        if (!user || !user.id) {
          console.error("User is not logged in");
          return;
        }
      
        dispatch(addToCartItems({userId: user.id, productId, quantity: 1 }))
          .then((data) => {
            if (data?.payload?.success) {
             
              dispatch(fetchCart(user?.id));
             alert("Product Added Into Cart")
            } else {
              alert("fail to add product")
            }
          },[setToastMessage])
          .catch((error) => {
            console.error("Error adding item to cart:", error);
          });
      }
    function handleGetProductDetails(getCurrentProductId){
        dispatch(fetchProductDetails(getCurrentProductId))
      }
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCurrentSlide(prevSlid=>(prevSlid+1) % slides.length)
        },3000)
        return clearInterval(timer)
    },[]);
    useEffect(()=>{
        dispatch(FatchAllFilterProduct({filtersParams:{},sortParams:'price-lowtohigh'}))
    },[dispatch])
    
    useEffect(()=>{
        if(productDetails!==null)setOpenDetailsDialog(true)
        },[productDetails]) 

  return <div className="flex flex-col min-h-screen ">
    <div className="relative w-full h-[600px] overflow-hidden">
        {
            slides.map((slide,index)=>(<img 
            src={slide}
            key={index}
            alt="img" 
            className={` ${index===currentSlide? 'opacity-100':'opacity-0 '}absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
            
            />))
        }
        <Button
         variant='outline'
         size="icon"
         className='absolute transform top-1/2 left-4 -translate-y-1/2 bg-zinc-500'
         onClick={()=>setCurrentSlide(prevSlid=>(prevSlid-1+slides.length)%slides.length)}
         >
        <ChevronLeftIcon className='w-4 h-4 '/>
        </Button>
        <Button 
        variant='outline' 
        size="icon"
        className='absolute transform top-1/2 right-4 -translate-y-1/2 bg-[#472B18]'
        onClick={()=>setCurrentSlide(prevSlid=> (prevSlid+1) % slides.length)}
         >
        <ChevronRightIcon className='w-4 h-4 '/>
        </Button>
    </div>
    <section className="my-5">
    <div className="container mx-auto px-4">
        <h2 className=' text-3xl text-bold mb-8 text-center bg-[#7f471f] bg-opacity-40'>Shop By Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            {
                categories.map(categoryItem=> <Card  onClick={()=>handleNavigateToListingPage(categoryItem,'category')}className='cursor-pointer transition duration-100 ease-in-out transform hover:scale-110'>
                    <CardContent className='flex  flec-col items-center justify-center p-6'>
                        <categoryItem.icon className='w-12 h-12 mb-4 text-primary'/>
                        <span className='font-bold'> {categoryItem.label}</span>
                    </CardContent>

                </Card>)
            }
    </div>

    </div>
    </section>
    <section className='my-5'>
    <div className="container mx-auto px-4">
    <h2 className=' text-3xl text-bold mb-8 text-center bg-[#7f471f] bg-opacity-40'>Feature Products</h2>
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {
            productList && productList.length > 0 ?
            productList.map(productItem=><ShopingProductTile
                handleGetProductDetails={handleGetProductDetails}
                handleAddToCart={handleAddToCart}
                product={productItem}
                                   
            />)
            :null
        }
    </div>
    </div>
    </section>
    <ToastProvider>
        {toastMessage && (
          <Toast>
            <ToastDescription>{toastMessage}</ToastDescription>
          </Toast>
        )}
        <ToastViewport className="fixed bottom-4 right-4 z-50 w-96" />
      </ToastProvider>
    <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails}/>
  </div>
}

export default ShopingHome