import React, { useContext, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import InnerImageZoom from "react-inner-image-zoom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../quantityBox/QuantityBox";
import { myContext } from "../../App";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = ({ closeProductModel, product}) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const context = useContext(myContext);

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

  const [qty, setqty] = useState(1);

  const minus = () => {
    if (qty > 1) {
      setqty((i) => i - 1);
    }
  };

  const plus = () => {
    if (product.stock == qty) {
      return       toast.error('You reached the maximum stock limit', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });;
    }
    setqty((i) => i + 1);
  };

  function addToCart() {
    const itemExist = context.cartItems.find(
      (item) => item.product._id === product._id
    );

    if (!itemExist) {
      const newItem = { product,qty};
      context.setCartItems((state) => [...state, newItem]);
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
      toast.error(`${product.name} is All ready added to cart`, {
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
  }

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
            <Slider
              {...settings2}
              className="zoomSliderBig"
              ref={zoomSliderBig}
            >
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
              <span>
                ₹ {Number(product.price * context.dollerToRupees * 2).toFixed(2)}{" "}
              </span>
            </del>
            <span className="newPrice lg text-danger ml-2">
              ₹ {Number(product.price * context.dollerToRupees).toFixed(2)}
            </span>
          </div>
          <span
            className={`stock mt-2 ${
              product.stock > 0 ? "text-success bg-success" : "text-danger"
            }`}
          >
            {product.stock > 0 ? "IN STOCK " : `OUT OF STOCK`}
          </span>
          <p className="mt-2">{product.description}</p>
          <div className="d-flex align-items-center">

            {/* <QuantityBox  sendDataToParent={handleDataFromChild}/> */}
            <div className="quantityDrop d-flex align-items-center">
              <Button style={{ outline: "none" }} onClick={minus}>
                <FaMinus />
              </Button>
              <input type="text" value={qty} />
              <Button style={{ outline: "none" }} onClick={plus}>
                <FaPlus />
              </Button>
            </div>

            <Button disabled={product.stock==0}
              className="btn-blue btn-lg btn-big btn-round ml-3  "
              style={{ outline: "none" }}
              onClick={addToCart}
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
