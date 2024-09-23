const ProductModel = require("../models/productModel");

// get product api-/api/v1/products/
exports.getProduct = async (req, res, next) => {
  try {
    const query = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const products = await ProductModel.find(query);
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// get product api -/api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "unable to find data",
    });
  }
};
