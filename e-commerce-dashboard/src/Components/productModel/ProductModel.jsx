import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../quantityBox/QuantityBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = ({ closeProductModel, product }) => {
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
    <Dialog
      open={true}
      onClose={() => {
        closeProductModel();
      }}
      className="productModel"
      TransitionComponent={Transition}
    >
      <h1>{product.name}</h1>
      <Button className="close_" onClick={() => closeProductModel()}>
        <IoMdClose />
      </Button>

      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span>Brands:</span>
          <span className="ml-2">
            <b>{product.seller}</b>
          </span>
        </div>
        <Rating
          name="size-small"
          value={product.ratings}
          size="small"
          precision={0.5}
          readOnly
        />
      </div>

      <hr />

      <div className="row mt-2 productDetailModal">
        <div className="col-md-5">
          <div className="productZoom">

            {/* Main Zoom Slider */}
            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
              {product.images && product.images.length > 0 ? (
                product.images.map((img, index) => (
                  <div className="item" key={img._id}>
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1.5}
                      src={img.image}
                      alt={product.name}
                      className="w-100"
                    />
                  </div>
                ))
              ) : (
                <p>No images available</p>
              )}
            </Slider>

            {/* Thumbnail Slider */}
            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              {product.images && product.images.length > 0 ? (
                product.images.map((img, index) => (
                  <div className="item" key={img._id}>
                    <img
                      src={img.image}
                      onClick={() => goto(index)}
                      className="w-100"
                      alt={`Thumbnail of ${product.name}`}
                    />
                  </div>
                ))
              ) : (
                <p>No thumbnails available</p>
              )}
            </Slider>

          </div>
        </div>

        <div className="col-md-7">
          <div className=" d-flex align-items-center">
            <del className="oldPrice lg">
              <span>₹ {Number(product.price * 2).toFixed(2)}</span>
            </del>
            <span className="newPrice lg text-danger ml-2">₹ {product.price}</span>
          </div>
          <span className="badge bg-success mt-2">IN STOCK {product.stock}</span>
          <p className="mt-2">{product.description}</p>
          <div className="d-flex align-items-center">
            <QuantityBox />
            <Button
              className="btn-blue btn-lg btn-big btn-round ml-3"
              style={{ outline: "none" }}
            >
              Add to cart
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <Button className="btn-round mt-3" variant="outlined">
              wish list
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;
