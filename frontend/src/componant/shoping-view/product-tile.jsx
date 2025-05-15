import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { categoryOptionMap } from '@/config';
import React from 'react';

function ShoppingProductTile({ product, handleGetProductDetails, handleAddToCart }) {
  return (
    <Card className="w-full cursor-pointer overflow-hidden shadow-md rounded-2xl">
      <div
        onClick={() => handleGetProductDetails(product?._id)}
        className="relative h-0 pb-[100%] overflow-hidden group" // makes a square (1:1) ratio
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product?.salePrice > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-400 hover:bg-red-700">
            Sale
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">{product?.title}</h2>

        <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
          {categoryOptionMap[product?.category]}
        </div>

        <div className="flex justify-between items-center">
          <span
            className={`text-lg font-semibold text-primary ${
              product?.salePrice > 0 ? 'line-through' : ''
            }`}
          >
            ${product?.price.toFixed(2)}
          </span>
          {product?.salePrice > 0 && (
            <span className="text-lg font-semibold text-primary">
              ${product?.salePrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="bg-[#ffecd1] backdrop-blur p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button onClick={() => handleAddToCart(product?._id)} className="w-full">
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
