const express = require("express")
const app = express()
const usersRouter = require("./routes/users")
const productRouter= require("./routes/products")
const cartRouter = require('./routes/cart')

 app.use('/users', usersRouter)
 app.use('/', productRouter)
 app.use('/cart', cartRouter)

 app.use((req, res) => {
   res.status(404).send("404 - Page Not Found");
 });

app.listen(3000, ()=>{
    console.log("Server is running")
})