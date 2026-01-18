const productService = require("../services/productServices")

const {sendError}= require('../utils/response')


const getProducts = (req, res) => {
  try {
    const result = productService.getProduct();
    res.json({ success: true, data: result });
  } catch (err) {
    sendError(err, res);
  }
};


const postProduct = (req, res) => {
try {
  const result = productService.postProduct();
  res.json({ success: true, data: result });
} catch (err) {
  sendError(err, res);
}
};


const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Product ID is required");

    const result = productService.getProductById(id);
    res.json({ success: true, data: result });
  } catch (err) {
    sendError(err, res);
  }
};





const editProduct = (req,res)=>{
   try {
     const result = productService.editProduct();
     res.json({ success: true, data: result });
   } catch (err) {
     sendError(err, res);
   }
}

const deleteProduct = (req,res)=>{
   try {
     const result = productService.deleteProduct();
     res.json({ success: true, data: result });
   } catch (err) {
     sendError(err, res);
   }
}


module.exports = {
    getProducts,
    postProduct,
    getProductById,
    editProduct,
    deleteProduct

}