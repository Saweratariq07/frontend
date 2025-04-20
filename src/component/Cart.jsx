import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../App";

const Cart = () => {
  const { cart, removeFromCart, updateCartItem } = useCart(); // Added updateCartItem
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Sync cartItems with global cart and calculate total price
  useEffect(() => {
    const updatedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
  }, [cart]);

  // Calculate total price
  const calculateTotalPrice = (items = cartItems) => {
    const total = items.reduce((sum, item) => {
      return sum + item.price * (item.quantity || 1);
    }, 0);
    setTotalPrice(total);
  };

  // Handle quantity change and persist to global cart
  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = Math.max(1, parseInt(newQuantity) || 1); // Ensure quantity >= 1
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
    updateCartItem(itemId, { quantity }); // Persist to global cart
  };

  // Handle remove item from cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  // Handle "Delete All" button click
  const handleDeleteAll = () => {
    cartItems.forEach(item => removeFromCart(item.id));
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div>
      <section className="header">
        <div className="w-full bg-gray-900 text-white text-center py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-semibold text-6xl">Shopping Cart</h1>
            <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
              <Link to="/home" className="text-2xl text-yellow-400 hover:text-yellow-500 transition">
                Home
              </Link>
              <span className="text-2xl text-gray-200">/ Cart</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-10 flex-wrap gap-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group"
            >
              <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={`/quicknow/${item.id}`}>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <img src="/Svg/eye-solid.svg" alt="View item details" className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  className="bg-white p-2 rounded-full shadow-md"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <img src="/Svg/x-solid.svg" alt="Remove from cart" className="w-5 h-5" />
                </button>
              </div>
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
              <h1 className="mt-6 text-gray-700 text-sm">{item.id <= 3 ? "Burger" : "Pizza"}</h1>
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Rs. {item.price}</span>
                <input
                  type="number"
                  className="w-16 p-2 border rounded text-center"
                  value={item.quantity || 1}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-2xl">Your Cart is Empty</p>
        )}
      </section>

      <section className="Serch">
        <div>
          <form
            className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-300"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="topic"
              value={`Cart total: Rs. ${totalPrice.toFixed(2)}`}
              readOnly
            />
            <button
              className="flex flex-row items-center justify-center min-w-[200px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3"
              type="button"
              onClick={() => {
                if (cartItems.length === 0) {
                  alert("Your cart is empty!");
                  return;
                }
                alert(`Proceeding to checkout with total: Rs. ${totalPrice.toFixed(2)}`);
                navigate("/checkout");
              }}
            >
              Proceed To Checkout
            </button>
          </form>
        </div>
        <div className="justify-items-center mt-10 flex justify-center gap-4">
          <button
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
          <Link to="/home">
            <button
              type="button"
              className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cart;