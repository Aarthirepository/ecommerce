const getProduct= ()=>{
     return("Fetching all products");
}

const postProduct =()=>{
    return ("Adding a new product");
}

const getProductById = (id)=>{
      return(`Fetching product with ID: ${id}`);
}


const addProductData = (productData)=>{
    return(`Adding a new product`)
}

const editProduct = ()=>{
    return("Editing product")
}

const deleteProduct = ()=>{
    return("Deleted Product")
}

module.exports = {
    getProduct,postProduct,getProductById,addProductData,editProduct,deleteProduct
}