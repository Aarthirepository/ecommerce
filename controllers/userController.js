
 const {sendError}= require('../utils/response')

const getUserDetails = (req, res) => {
    try {
      res.send("Fetching all users");
    } catch (err) {
      sendError(err, res);
    }
};


const postUserDetails = (req,res)=>{
     try {
       res.send("Adding a new user.");
     } catch (err) {
       sendError(err, res);
     }
}

const getUserById = (req,res)=>{
     try {
       const { id } = req.params;
       if (!id) throw new Error("User ID is required");

       res.json({ success: true, data: { id, name: "John Doe" } });
     } catch (err) {
       sendError(err, res);
     }
}
module.exports ={
    getUserDetails,
    postUserDetails,
    getUserById
}