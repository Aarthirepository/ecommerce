const getCartById = (req,res)=>{
     try {
    const { id } = req.params;
    if (!id) throw new Error("User ID is required");
    res.send(`Fetching cart for user with ID: ${id}`);
  } catch (err) {
    sendError(err, res);
  }
}


const postCartById = (req, res) => {
 try {
   const { id } = req.params;
   if (!id) throw new Error("User ID is required");
   res.send(`Adding product to cart for user with ID: ${id}`);
 } catch (err) {
   sendError(err, res);
 }
};


module.exports = {
    getCartById,postCartById
}