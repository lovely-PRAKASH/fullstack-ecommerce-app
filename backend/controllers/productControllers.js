const productModel = require("../models/productModel");
const ProductModel = require("../models/productModel");

// get product api-/api/v1/products/
exports.getProduct = async (req, res, next) => {
  const products = await ProductModel.find({});

  res.json({
    success: true,
    products,
  });
};

// get product api -/api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id);
      
        res.json({
          success: true,
          product,
        });
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message:'unable to find data'
          });
    }
};
