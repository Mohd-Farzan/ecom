import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function AdminProductTile({ 
    product,setFormData,
    setOpenCreateProduct,
    setCurrenteditedId,
    handleDelete
}) {
    return (
        <Card className='relative group border-none shadow-none  bg-[#a6b7c9] cursor-pointer overflow-hidden'>
            <div className="relative overflow-hidden h-[400px] transition-all duration-300 group-hover:h-[350px]">
                <img 
                    src={product?.image} 
                    alt={product?.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <CardContent>
                <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
                <div className="flex justify-between items-center mb-2">
                    <span className={`${product?.salePrice > 0 ? 'line-through' : ''} text-lg font-semibold text-primary`}>
                        ${product?.price}
                    </span>
                    {
                        product?.salePrice > 0 
                        ? <span className="text-lg font-bold">${product?.salePrice}</span>
                        : <p>Not available</p>
                    }
                </div>
            </CardContent> 
            <CardFooter className='flex justify-between items-center'>
                <Button onClick={() => {
                    setOpenCreateProduct(true);
                    setCurrenteditedId(product?._id); // Use _id instead of id
                    setFormData(product);
                }}>
                    Edit
                </Button>
                <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
            </CardFooter>
        </Card>
    );
}

export default AdminProductTile;
