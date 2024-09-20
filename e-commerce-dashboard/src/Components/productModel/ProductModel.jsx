import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProductModel = ({ closeProductModel }) => {
  const zoomSliderBig=useRef();
  const zoomSlider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrow: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrow: true,
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
            <div className="producZoom">
              <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                <div className="item">
                  <InnerImageoom zoomType="hover" zoomScale={1}
                    src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-7"></div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
