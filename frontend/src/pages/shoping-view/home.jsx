import React, { useEffect, useState } from 'react'
import book1 from '../../assets/img/download.jpeg'
import book2 from '../../assets/img/images.jpeg'
import book3 from '../../assets/img/slide2.jpeg'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, ShirtIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FatchAllFilterProduct, fetchProductDetails } from '@/store/shop/products-slice'
import { useDispatch, useSelector } from 'react-redux'
import ShopingProductTile from '@/componant/shoping-view/product-tile'
import { Link, useNavigate } from 'react-router-dom'
import { addToCartItems, fetchCart } from '@/store/shop/cart-slice'
import ProductDetailsDialog from '@/componant/shoping-view/product-details'
import { HeroSection } from '@/componant/heroSection'

function ShopingHome() {
  const { productList, productDetails } = useSelector((state) => state.ShopProducts)
  const { user } = useSelector((state) => state.auth)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [book1, book2, book3]
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const categories = [
    { id: 'lehenga', label: 'Lehenga', icon: ShirtIcon },
    { id: 'garara', label: 'Garara', icon: ShirtIcon },
    { id: 'sharara', label: 'Sharara', icon: ShirtIcon },
  ]

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem('filters')
    const currentFilter = {
      [section]: [getCurrentItem.id],
    }
    sessionStorage.setItem('filters', JSON.stringify(currentFilter))
    navigate(`/shop/list`)
  }

  function handleAddToCart(productId) {
    if (!user || !user.id) {
      alert('Please log in to add items to cart.')
      return
    }

    dispatch(addToCartItems({ userId: user.id, productId, quantity: 1 }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchCart(user.id))
          alert('Product Added Into Cart')
        } else {
          alert('Failed to add product')
        }
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error)
      })
  }

  function handleGetProductDetails(productId) {
    dispatch(fetchProductDetails(productId))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    dispatch(FatchAllFilterProduct({ filtersParams: {}, sortParams: 'price-lowtohigh' }))
  }, [dispatch])

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true)
  }, [productDetails])

  return (
    <>
      <HeroSection />

      {/* Shop by Categories */}
      <section className="my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-700 pb-2 inline-block">
            Shop By Categories
          </h2>
          <div className="flex justify-end mb-4">
            <Link to="/shop/list" className="text-xl font-semibold hover:text-blue-700">
              View All Categories
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((categoryItem, index) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, 'category')}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-10 h-10 mb-3 text-primary" />
                  <span className="font-semibold text-sm sm:text-base">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Products */}
      <section className="my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-700 pb-2 inline-block">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShopingProductTile
                    key={productItem._id}
                    handleGetProductDetails={handleGetProductDetails}
                    handleAddToCart={handleAddToCart}
                    product={productItem}
                  />
                ))
              : <p className="col-span-full text-gray-500">No products found.</p>}
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </>
  )
}

export default ShopingHome
