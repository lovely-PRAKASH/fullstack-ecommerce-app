import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProductModel = ({ closeProductModel }) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrow: true,
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrow: false,
  };
  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };
  return (
    <>
      <Dialog
        open={true}
        onClose={() => {
          closeProductModel();
        }}
        className="productModel"
        TransitionComponent={Transition}
      >
        <h1>All Natural Italian-Style Chicken Meatballs</h1>
        <Button className="close_" onClick={() => closeProductModel()}>
          <IoMdClose />
        </Button>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>welch's</b>
            </span>
          </div>
          <Rating
            name="size-small"
            defaultValue={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <div className="productZoom">
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    // zoomType="hover"
                    zoomScale={1}
                    src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                  />
                </div>
              </Slider>
            </div>
            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img
                  src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                  onClick={() => goto(0)}
                  className="w-100"
                />
              </div>
              <div className="item">
                <img
                  src="		https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                  onClick={() => goto(1)}
                  className="w-100"
                />
              </div>
              <div className="item">
                <img
                  src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                  onClick={() => goto(2)}
                  className="w-100"
                />
              </div>
            </Slider>
          </div>
          <div className="col-md-7">
            <div className=" d-flex align-items-center">
                <del className="oldPrice lg">
                  <span>$9.35</span>
                </del>
                <span className="newPrice lg text-danger ml-2">$7.25</span>
            </div>
              <span className="badge bg-success mt-2">IN STOCK</span>
            <p className="mt-2">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
            <div className="d-fle align-itmes-center">
              <div className="quantityDrop d-flex align-itmes-center">
                <Button><FaMinus/></Button>
                <input type="number" />
                <Button><FaPlus/></Button>
              </div>
              <Button className="btn-blue btn-lg btn-big btn-round">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
