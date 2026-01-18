const express = require("express")
const app = express()
const usersRouter = require("./routes/users")
const productRouter= require("./routes/products")
const cartRouter = require('./routes/cart')

 app.use('/users', usersRouter)
 app.use('/', productRouter)
 app.use('/cart', cartRouter)

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
app.listen(3000, ()=>{
    console.log("Server is running")
})