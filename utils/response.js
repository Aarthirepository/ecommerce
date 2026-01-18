const sendError = (err, res) => {
  console.error(err); // log for debugging

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = { sendError };
