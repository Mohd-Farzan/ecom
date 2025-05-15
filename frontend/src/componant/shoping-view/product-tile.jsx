import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { categoryOptionMap } from '@/config';
import { Toast } from '@radix-ui/react-toast';
import React from 'react'

function ShopingProductTile({product,handleGetProductDetails, handleAddToCart}) {
  return (
    <Card className='relative group border-none shadow-none cursor-pointer overflow-hidden'>
        <div onClick={()=>handleGetProductDetails(product?._id)} className='relative overflow-hidden h-[300px] transition-all duration-300 group-hover:h-[350px]'>
            <div className="relative">
                <img
                src={product?.image}
                alt={product?.title}
                className=' w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                {
                    product?.salePrice> 0 ?<Badge className='absolute top-2 left-2 bg-red-400 hover:bg-red-700'>Sale</Badge>:null
                }
            </div>
            <CardContent className='p-2 '>
                <h2 className='text-xl font-bold mb-2'>{product?.title}</h2>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm text-muted-foreground'>{categoryOptionMap[product?.category]}</span>
                </div>

                <div className='flex justify-between items-center mb-2'>
                    <span className={`${product?.salePrice>0?'line-through':''}text-lg font-semibold text-primary`}>${product?.price}</span>
                    {
                        product?.salePrice>0? <span className='text-lg font-semibold text-primary' >${product?.salePrice}</span>:null
                    }
                </div>
            </CardContent>
            
        </div>
        <CardFooter className='absolute left-0 right-0 bottom-0 bg-[#ffecd1] backdrop-blur p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <Button onClick={()=>handleAddToCart(product?._id)}>
                    Add To cart
                </Button>
            </CardFooter>

    </Card>
  );
}

export default ShopingProductTile