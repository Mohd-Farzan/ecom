const mongoose = require('mongoose')
const OrderSchema=new mongoose.Schema({
    userId:String,
    cartId:String,
    
    cartItems:[
        {
            productId:String,
            title:String,
            image:String,
            price:Number,
            salePrice:Number,
            quantity:Number
        }
    ],
    address:[
        {
            addressId:String,
            address:String,
            city:String,
            pincode:Number,
            phone:Number,

        }
    ],
    orderStatus:String,
    paymentMethod:String,
    paymentStatus:String,
    totalAmmount:Number,
    orderDate:Date,
    orderUpdateDate:Date,
    paymentId:String,
    payerId:String,
})
const OrderModel=mongoose.model("order",OrderSchema)
module.exports=OrderModel