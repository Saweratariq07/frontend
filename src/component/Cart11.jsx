import { Link } from "react-router-dom";
import { useState } from "react";

const Cart11 = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Creamy Chicken Delight", price: 3000, image: "/Image/p3.png" }
  ]);

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return (
    <div>
      {/* Header Section */}
      <section className="header">
        <div className="w-full bg-gray-900 text-white text-center py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-semibold text-6xl md:text-6xl">Shopping Cart</h1>
            <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
              <Link to="/home" className="text-2xl text-yellow-400 hover:text-yellow-500 transition">Home</Link>
              <em className="text-2xl not-italic text-gray-200">/ Cart</em>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Item Section */}
      <section className="flex justify-center mt-10">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
              {/* Hover Buttons */}
              <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Link to="/Quicknow">
                  <button className="bg-white p-2 rounded-full shadow-md">
                  <img src="/Svg/eye-solid.svg" alt="View item details" className="w-5 h-5" />
                  </button>
                </Link>
                </div>
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Link to="/cart11">
                  <button onClick={() => removeFromCart(item.id)}>
                    <img src="/Svg/x-solid.svg" alt="Remove from cart" className="w-5 h-5" />
                  </button>
                  </Link>
                </div>
              </div>

              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />

              {/* Product Info */}
              <h1 className="mt-6 text-gray-700 text-sm">Pizza</h1>
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>

              {/* Price and Quantity */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Rs. {item.price}</span>
                <label>
                  <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                </label>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-2xl">Your Order Has Been Cancel</p>
        )}
      </section>
    </div>
  );
};

export default Cart11;
