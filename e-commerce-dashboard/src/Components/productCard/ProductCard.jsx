import React from "react";
import Rating from "@mui/material/Rating";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import { Button } from "@mui/material";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoHeart } from "react-icons/go";

const ProductCard = () => {
  return (
        <div className="productItem">
          <div className="imgwrapper">
            <img
              src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
              alt=""
              className="w-100"
            />
            <span className="badge badge-primary ">20%</span>
            {/* <span className="badge badge-primary ">Recommended</span> */}
            
            <div className="actions">
              <Button>
                <AiOutlineFullscreen />
              </Button>
              <Button className='heartBtn'>
                <GoHeart />
              </Button>
            </div>
          </div>
          <div className="info">
            <h4>All Natural Italian-Style Chicken Meatballs</h4>
            <span className="stock text-success d-block mt-2 mb-2">
              IN STOCK
            </span>
            <Rating
              name="size-small"
              defaultValue={5}
              size="small"
              precision={0.5}
              readOnly
            />
            <div className="price">
              <del className="oldPrice">
                <span>$9.35</span>
              </del>
              <span className="newPrice text-danger">$7.25</span>
            </div>
          </div>
        </div>
  );
};

export default ProductCard;
