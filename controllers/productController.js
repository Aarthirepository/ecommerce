const getProducts = (req, res) => {
  res.send("Fetching all products");
};


const postProduct = (req, res) => {
  res.send("Adding a new product");
};


const getProductById = (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
};


const editProduct = (req,res)=>{
    res.send(`edited the product`)
}

const deleteProduct = (req,res)=>{
    res.send(`Deleted the product`)
}

module.exports = {
    getProducts,
    postProduct,
    getProductById,
    editProduct,
    deleteProduct

}