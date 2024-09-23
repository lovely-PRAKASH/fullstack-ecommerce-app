import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Table, Form, ProgressBar } from 'react-bootstrap';


const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, quantity: 1 },
  ]);

  const [subtotal, setSubtotal] = useState(3.29);
  const freeShippingThreshold = 50;
  const flatRate = 5.00;
  const localPickup = 0.00;

  const [shippingMethod, setShippingMethod] = useState('localPickup');
  const total = subtotal + (shippingMethod === 'flatRate' ? flatRate : localPickup);

  // Function to handle shipping method change
  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left side: Cart details */}
        <div className="col-md-8">
          <div className="mb-3 p-3 border">
            <p>
              Add <span className="text-danger">${remainingForFreeShipping.toFixed(2)}</span> to cart and get free shipping!
            </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
              >
                {((subtotal / freeShippingThreshold) * 100).toFixed(0)}%
              </div>
            </div>
          </div>

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
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src="https://via.placeholder.com/50"
                      alt={item.name}
                      className="mr-2"
                    />
                    {item.name}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-light">-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        className="form-control text-center"
                        style={{ width: '50px', margin: '0 10px' }}
                        readOnly
                      />
                      <button className="btn btn-light">+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm">
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <input type="text" className="form-control" placeholder="Coupon code" />
              <button className="btn btn-primary ml-2">Apply coupon</button>
            </div>
            <button className="btn btn-secondary">Remove All</button>
          </div>
        </div>

        {/* Right side: Cart totals */}
        <div className="col-md-4">
          <div className="border p-3">
            <h4>Cart Totals</h4>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr />
            <div className="mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="flatRate"
                  name="shipping"
                  value="flatRate"
                  checked={shippingMethod === 'flatRate'}
                  onChange={handleShippingChange}
                />
                <label className="form-check-label" htmlFor="flatRate">
                  Flat rate: ${flatRate.toFixed(2)}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="localPickup"
                  name="shipping"
                  value="localPickup"
                  checked={shippingMethod === 'localPickup'}
                  onChange={handleShippingChange}
                />
                <label className="form-check-label" htmlFor="localPickup">
                  Local pickup
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <hr />
            <button className="btn btn-danger btn-block">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

