import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import { Button } from "@mui/material";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import ProductModel from "../productModel/ProductModel";

const ProductCard = ({product}) => {
  const [isopenProductModel, setIsOpenProductModel]=useState(false);

  const viewProductDetial = (id) => {
    setIsOpenProductModel(true);
  };

  const closeProductModel=()=>{
    setIsOpenProductModel(false);
  }
  return (
    <>
      <div className="productItem">
        <div className="imgwrapper">
        <img src={product?.images?.[0].image || 'default-image.jpg'} alt="Product" />

          <span className="badge badge-primary ">20%</span>
          {/* <span className="badge badge-primary ">Recommended</span> */}

          <div className="actions">
            <Button>
              <AiOutlineFullscreen onClick={() => viewProductDetial(1)} />
            </Button>
            <Button className="heartBtn">
              <GoHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>{product?.name}</h4>
          <span className="stock text-success d-block mt-2 mb-2">IN STOCK {product.stock}</span>
          <Rating
            name="size-small"
            value={product.ratings}
            size="small"
            precision={0.5}
            readOnly
          />
          <div className="price">
            <del className="oldPrice">
              <span>₹{Number(product.price * 2).toFixed(2)} </span>
            </del>
            <span className="newPrice text-danger">₹ {product.price} </span>
          </div>
        </div>
      </div>

      { isopenProductModel === true && <ProductModel closeProductModel={closeProductModel} product={product}/>}
    </>
  );
};

export default ProductCard;
