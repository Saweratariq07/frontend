import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../App";

const Checkout = () => {
  const { cart } = useCart(); // Get cart items from context
  const navigate = useNavigate();

  const cartItems = [
    ...cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
      total: item.price * (item.quantity || 1),
    })),
    {
      name: "Grand Total",
      price: cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const orderDetails = {
      items: cart,
      paymentMethod,
      total,
      date: new Date().toLocaleString(),
      orderId: Math.random().toString(36).substr(2, 9),
    };

    console.log("Order placed:", orderDetails);
    alert(`Order placed successfully with ${paymentMethod}! 
      Total: Rs. ${total.toFixed(2)}
      Order ID: ${orderDetails.orderId}`);

    navigate("/order", { state: { orderDetails } });
  };

  return (
    <div>
      <section className="header">
        <div className="w-full bg-gray-900 text-white text-center py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-semibold text-4xl md:text-6xl">Checkout</h1>
            <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
              <Link
                to="/home"
                className="text-xl md:text-2xl text-yellow-400 hover:text-yellow-500 transition capitalize"
              >
                Home
              </Link>
              <span className="text-xl md:text-2xl text-gray-200">/ Checkout</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h1 className="text-3xl font-bold text-center mb-8 underline decoration-rose-600 underline-offset-8">
          ORDER SUMMARY
        </h1>
        <div className="max-w-md mx-auto border rounded-lg shadow-lg p-6 bg-white">
          <div className="mb-6">
            <div className="bg-black text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between my-4 text-md p-2 ${
                    item.name === "Grand Total" ? "bg-gray-800 font-bold" : "bg-white text-gray-700"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.quantity ? (
                    <span>
                      Rs. {item.price.toFixed(2)} x {item.quantity} = Rs. {item.total.toFixed(2)}
                    </span>
                  ) : (
                    <span>Rs. {item.price.toFixed(2)}</span>
                  )}
                </div>
              ))}
              <Link to="/cart">
                <button className="px-6 mt-4 bg-yellow-400 text-white font-medium py-2 rounded-lg hover:bg-yellow-500 transition">
                  View Cart
                </button>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">YOUR INFO</h3>
            <Link to="/updateprofile">
              <button className="px-6 mt-4 bg-yellow-400 text-white font-medium py-2 rounded-lg hover:bg-yellow-500 transition">
                Update Info
              </button>
            </Link>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">DELIVERY INFO</h3>
            <Link to="/address">
              <button className="px-6 mt-4 bg-yellow-400 text-white font-medium py-2 rounded-lg hover:bg-yellow-500 transition">
                Update Address
              </button>
            </Link>
          </div>

          <div className="mb-6">
            <select
              className="w-full p-2 border rounded-lg text-gray-600"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="" disabled>
                Select payment method
              </option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="cash-on-delivery">Cash on Delivery</option>
            </select>
          </div>
          <button
            className="w-full bg-red-500 text-white font-medium py-3 rounded-lg hover:bg-red-600 transition"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;