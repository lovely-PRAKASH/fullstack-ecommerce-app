import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import { Button } from "@mui/material";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import ProductModel from "../productModel/ProductModel";
import { myContext } from "../../App";

const ProductCard = ({product}) => {
  const [isopenProductModel, setIsOpenProductModel]=useState(false);

  const context=useContext(myContext);
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
            <Button onClick={() => viewProductDetial(1)}>
              <AiOutlineFullscreen  />
            </Button>
            <Button className="heartBtn">
              <GoHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>{product.name.length >20?product.name.substr(0,20)+"...":product.name}</h4>
          <span className={`stock d-block mt-2 mb-2 ${product.stock >0? 'text-success':'text-danger'}`}> {product.stock >0 ?'IN STOCK ': `OUT OF STOCK`} </span>
          <Rating
            name="size-small"
            value={product.ratings}
            size="small"
            precision={0.5}
            readOnly
          />
          <div className="price">
            <del className="oldPrice">
              <span>₹{Number((product.price * context.dollerToRupees) * 2).toFixed(2)} </span>
            </del>
            <span className="newPrice text-danger">₹ {Number(product.price * context.dollerToRupees).toFixed(2)} </span>
          </div>
        </div>
      </div>

      { isopenProductModel === true && <ProductModel closeProductModel={closeProductModel} product={product} />}
    </>
  );
};

export default ProductCard;
