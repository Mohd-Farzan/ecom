"use client"

import { useEffect, useState } from "react"
import book1 from "../../assets/img/download.jpeg"
import book2 from "../../assets/img/images.jpeg"
import book3 from "../../assets/img/slide2.jpeg"
import { ShirtIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FatchAllFilterProduct, fetchProductDetails } from "@/store/shop/products-slice"
import { useDispatch, useSelector } from "react-redux"
import ShopingProductTile from "@/componant/shoping-view/product-tile"
import { Link, useNavigate } from "react-router-dom"
import { addToCartItems, fetchCart } from "@/store/shop/cart-slice"
import ProductDetailsDialog from "@/componant/shoping-view/product-details"
import { Toast, ToastDescription, ToastProvider, ToastViewport } from "@/components/ui/toast"
import { HeroSection } from "@/componant/shoping-view/heroSection"

function ShopingHome() {
  const { productList, productDetails } = useSelector((state) => state.ShopProducts)
  const { user } = useSelector((state) => state.auth)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [book1, book2, book3]
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false)
  const [toastMessage, setToastMessage] = useState(null) // Toast message state
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const categories = [
    { id: "lehenga", label: "Lehenga", icon: ShirtIcon },
    { id: "garara", label: "Garara", icon: ShirtIcon },
    { id: "sharara", label: "Sharara", icon: ShirtIcon },
  ]

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters")
    const currentFilter = {
      [section]: [getCurrentItem.id],
    }
    sessionStorage.setItem("filters", JSON.stringify(currentFilter))
    navigate(`/shop/list`)
  }

  function handleAddToCart(productId) {
    if (!user || !user.id) {
      console.error("User is not logged in")
      return
    }

    dispatch(addToCartItems({ userId: user.id, productId, quantity: 1 }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchCart(user?.id))
          setToastMessage("Product added to cart successfully")
          setTimeout(() => setToastMessage(null), 3000)
        } else {
          setToastMessage("Failed to add product to cart")
          setTimeout(() => setToastMessage(null), 3000)
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error)
        setToastMessage("Error adding item to cart")
        setTimeout(() => setToastMessage(null), 3000)
      })
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    dispatch(FatchAllFilterProduct({ filtersParams: {}, sortParams: "price-lowtohigh" }))
  }, [dispatch])

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true)
  }, [productDetails])

  return (
    <>
      <div>
        <HeroSection />
      </div>

      {/* Image Carousel (Commented out in original but made responsive) */}
      {/* <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img 
            src={slide || "/placeholder.svg"}
            key={index}
            alt={`Slide ${index + 1}`} 
            className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <Button
          variant='outline'
          size="icon"
          className='absolute transform top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-zinc-500/70 hover:bg-zinc-500 h-8 w-8 sm:h-10 sm:w-10'
          onClick={() => setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length)}
        >
          <ChevronLeftIcon className='w-4 h-4 sm:w-5 sm:h-5' />
        </Button>
        <Button 
          variant='outline' 
          size="icon"
          className='absolute transform top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-[#472B18]/70 hover:bg-[#472B18] h-8 w-8 sm:h-10 sm:w-10'
          onClick={() => setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)}
        >
          <ChevronRightIcon className='w-4 h-4 sm:w-5 sm:h-5' />
        </Button>
      </div> */}

      {/* Categories Section */}
      <section className="my-6 md:my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center border-b-2 border-red-700 pb-2 mx-auto inline-block">
            Shop By Categories
          </h2>

          <div className="flex justify-between items-center mb-4">
            <div className="w-8"></div> {/* Empty div for spacing */}
            <Link to="/shop/list" className="text-sm sm:text-base md:text-lg font-semibold hover:text-blue-800">
              View All Categories
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                className="cursor-pointer transition duration-100 ease-in-out transform hover:scale-105"
              >
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
                  <categoryItem.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 text-primary" />
                  <span className="font-bold text-sm sm:text-base">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="my-6 md:my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center border-b-2 border-red-700 pb-2 mx-auto inline-block">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {productList && productList.length > 0 ? (
              productList.map((productItem) => (
                <ShopingProductTile
                  key={productItem.id}
                  handleGetProductDetails={handleGetProductDetails}
                  handleAddToCart={handleAddToCart}
                  product={productItem}
                />
              ))
            ) : (
              <div className="col-span-full py-10 text-center text-gray-500">No products available</div>
            )}
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      <ToastProvider>
        {toastMessage && (
          <Toast className="fixed bottom-4 right-4 z-50 max-w-[90vw] sm:max-w-sm">
            <ToastDescription>{toastMessage}</ToastDescription>
          </Toast>
        )}
        <ToastViewport />
      </ToastProvider>

      {/* Product Details Dialog */}
      <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails} />
    </>
  )
}

export default ShopingHome
