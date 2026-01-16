const productService = require("../services/productServices")




const getProducts = (req, res) => {
 const result = productService.getProduct()
 res.send(result)
};


const postProduct = (req, res) => {
 const result = productService.postProduct()
 res.send(result)
};


const getProductById = (req, res) => {
  const {id} = req.params
  const result = productService.getProductById(id)
  res.send(result)
};



const editProduct = (req,res)=>{
   const result = productService.editProduct()
   res.send(result)
}

const deleteProduct = (req,res)=>{
    const result = productService.deleteProduct()
    res.send(result)
}


module.exports = {
    getProducts,
    postProduct,
    getProductById,
    editProduct,
    deleteProduct

}