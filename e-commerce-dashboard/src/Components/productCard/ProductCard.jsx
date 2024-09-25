import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import ProductModel from "../productModel/ProductModel";
import { myContext } from "../../App";
import { toast, Bounce } from "react-toastify"; // For notifications

const ProductCard = ({ product }) => {
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);
  const { cartItems, setCartItems, dollerToRupees } = useContext(myContext); // Access context

  const viewProductDetail = () => {
    setIsOpenProductModel(true);
  };

  const closeProductModel = () => {
    setIsOpenProductModel(false);
  };

  const addToCart = (product) => {
    const itemExist = cartItems.find(
      (item) => item.product._id === product._id
    );

    if (!itemExist) {
      const newItem = { product, qty: 1 }; // Add default quantity as 1
      setCartItems((state) => [...state, newItem]);
      toast.success(`${product.name} is successfully added to cart`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      toast.error(`${product.name} is already in the cart`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="productItem">
        <div className="imgwrapper">
          <img
            src={product?.images?.[0].image || "default-image.jpg"}
            alt="Product"
          />
          <span className="badge badge-primary">20%</span>

          <div className="actions">
            <Button onClick={viewProductDetail}>
              <AiOutlineFullscreen />
            </Button>
            <Button
              className="heartBtn"
              onClick={() => addToCart(product)} // Add to cart on heart button click
            >
              <GoHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>
            {product.name.length > 20
              ? product.name.substr(0, 20) + "..."
              : product.name}
          </h4>
          <span
            className={`stock d-block mt-2 mb-2 ${
              product.stock > 0 ? "text-success" : "text-danger"
            }`}
          >
            {product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
          </span>
          <Rating
            name="size-small"
            value={product.ratings}
            size="small"
            precision={0.5}
            readOnly
          />
          <div className="price">
            <del className="oldPrice">
              <span>
                ₹
                {Number((product.price * dollerToRupees) * 2).toFixed(
                  2
                )}
              </span>
            </del>
            <span className="newPrice text-danger ml-2">
              ₹ {Number(product.price * dollerToRupees).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {isOpenProductModel && (
        <ProductModel closeProductModel={closeProductModel} product={product} />
      )}
    </>
  );
};

export default ProductCard;
