import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { myContext } from "../App";
import { toast, Bounce } from "react-toastify";
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ cartItems, setCartItems }) => {
  const context = useContext(myContext);
  const [complete, setComplete] = useState(false);

  // Subtotal: Total quantity of items
  const [subtotal, setSubtotal] = useState(0);

  // Total: Total amount (price * quantity)
  const [total, setTotal] = useState(0);

  // Calculate subtotal and total when cartItems change
  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.qty, 0); // Total quantity
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.qty * context.dollerToRupees,
      0
    ); // Total price
    setSubtotal(newSubtotal);
    setTotal(newTotal);
  }, [cartItems, context.dollerToRupees]);

  // Update quantity - minus
  const minus = (item) => {
    if (item.qty > 1) {
      const updatedItems = cartItems.map((i) =>
        i.product._id === item.product._id ? { ...i, qty: i.qty - 1 } : i
      );
      setCartItems(updatedItems);
    } else {
      toast.warn("Minimum quantity is 1", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  // Update quantity - plus
  const plus = (item) => {
    if (item.qty >= item.product.qty) {
      return toast.error("Maximum stock limit reached", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
        transition: Bounce,
      });
    }
    const updatedItems = cartItems.map((i) =>
      i.product._id === item.product._id ? { ...i, qty: i.qty + 1 } : i
    );
    setCartItems(updatedItems);
  };

  // Remove a single item
  const removeItem = (item) => {
    const filteredItems = cartItems.filter(
      (i) => i.product._id !== item.product._id
    );
    setCartItems(filteredItems);
  };

  // Remove all items
  const removeAll = () => {
    setCartItems([]);
  };

  // Razorpay payment handler
  const handlePaymentSuccess = (response) => {
    toast.success("Payment successful!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
      transition: Bounce,
    });
    setComplete(true);
    setCartItems([]); // Clear cart
  };

  const handlePaymentError = (error) => {
    toast.error("Payment failed. Please try again.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
      transition: Bounce,
    });
  };

  const placeOrderHandler = async () => {
    try {
      // Call backend to create order
      const orderResponse = await fetch(import.meta.env.VITE_API_URL + "/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total, items: cartItems }),
      });
      
      const orderData = await orderResponse.json();

      // Razorpay options
      const options = {
        key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID, 
        key_secret:import.meta.env.REACT_APP_RAZORPAY_SECRET_KEY_ID,
        amount: orderData.amount, // Amount in paise (multiply by 100)
        currency: "INR",
        name: "GOCart pvt.Ltd",
        description: "Purchase Description",
        order_id: orderData.order_id, // Razorpay order ID from the backend
        handler: function (response) {
          handlePaymentSuccess(response); // Handle payment success
        },
        prefill: {
          name: "prakash",
          email: "prakash@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        handlePaymentError(response.error); // Handle payment failure
      });
      rzp.open();
    } catch (error) {
      toast.error("Error placing the order. Try again later.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return cartItems.length > 0 ? (
    <div className="container mt-4">
      <div className="row">
        {/* Left side: Cart details */}
        <div className="col-md-8">
          <table className="table table-striped table-bordered table-hover mb-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product._id}>
                  <td>
                    <img
                      src={item.product.images[0].image}
                      alt={item.product.name}
                      className="mr-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    {item.product.name}
                  </td>
                  <td>
                    ₹{(item.product.price * context.dollerToRupees).toFixed(2)}
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button onClick={() => minus(item)}>-</Button>
                      <input
                        type="number"
                        value={item.qty}
                        className="form-control text-center"
                        style={{ width: "50px", margin: "0 10px" }}
                        readOnly
                      />
                      <Button onClick={() => plus(item)}>+</Button>
                    </div>
                  </td>
                  <td>
                    ₹
                    {(
                      item.product.price *
                      context.dollerToRupees *
                      item.qty
                    ).toFixed(2)}
                  </td>
                  <td>
                    <Button
                      onClick={() => removeItem(item)}
                      className="btn btn-danger btn-sm"
                    >
                      &times;
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-end m-2">
            <Button onClick={removeAll} className="btn btn-danger">
              Remove All
            </Button>
          </div>
        </div>

        {/* Right side: Cart totals */}
        <div className="col-md-4 totalCart">
          <div className="border p-3">
            <h4>Order Summary</h4>
            <div className="d-flex justify-content-between">
              <span>Subtotal (Total Quantity)</span>
              <span><strong>{subtotal}</strong> units</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Total (Order Amount)</span>
              <span>₹ <strong>{total.toFixed(2)}</strong></span>
            </div>
            <hr />
            <Button className="btn btn-success btn-block" onClick={placeOrderHandler}>
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : !complete ? (
    <div className="container mt-4">
      <div className="emptyCart row d-flex">
        <h4 className="emptyh4">Your cart is Empty</h4>
      </div>
    </div>
  ) : (
    <div className="container mt-4">
      <div className="orderCart row d-flex">
        <h4 className="orderh4 justify-content-center">Your Order is Placed Successfully</h4> <br /> <br />
        <p>Your Order has been Placed successfully!!</p>
      </div>
    </div>
  );
};

export default Cart;
