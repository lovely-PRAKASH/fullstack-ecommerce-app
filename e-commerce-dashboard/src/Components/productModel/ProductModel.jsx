import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import Rating from "@mui/material/Rating";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProductModel = ({closeProductModel}) => {
  return (
    <>
      <Dialog
        open={true}
        onClose={()=>{closeProductModel()}}
        className="productModel"
        TransitionComponent={Transition}
      >
        <h1>All Natural Italian-Style Chicken Meatballs</h1>
        <Button className="close_" onClick={()=>closeProductModel()}>
          <IoMdClose />
        </Button>
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-center mr-4">
                <span>Brands:</span>
                <span className="ml-2"><b>welch's</b></span>
            </div>
            <Rating
              name="size-small"
              defaultValue={5}
              size="small"
              precision={0.5}
              readOnly
            />

        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
