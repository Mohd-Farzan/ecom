const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/auth/auth-routes');
const router = require('./routes/admin/product-routes');
const shopProductRouter=require('./routes/shop/products-rout')
const shopCartRouter=require('./routes/shop/cart-routes')
const shopAddressRouter=require('./routes/shop/address-routes')
const shopOrderRouter=require('./routes/shop/orders-routes')
const path = require('path')
dbConnect;
const _dirname=path.resolve();
const PORT = process.env.PORT || 5000;
const app = express();
const allowedOrigins = [
  'https://the-lawncollection.onrender.com', 
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT','OPTIONS'], 
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cache-Control',
  ],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products', router);
app.use('/api/shop/products',shopProductRouter)
app.use('/api/shop/cart',shopCartRouter)
app.use('/api/shop/address', shopAddressRouter)
app.use('/api/shop/order',shopOrderRouter)
app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get("*",(_,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
