// Quicknow.jsx
import { Link, useParams } from "react-router-dom";
import { useCart } from "../App"; // Adjust path if necessary

const Quicknow = () => {
  const { id } = useParams(); // Get the item ID from the URL (e.g., /quicknow/1)
  const { cart, addToCart } = useCart(); // Access cart and addToCart function

  // Find the item in the cart based on the ID
  const item = cart.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p className="text-center text-gray-500 text-2xl my-48">Item not found</p>;
  }

  return (
    <div className="mt-10 container mx-auto my-4 flex flex-col items-center">
      <h1 className="mt-2 text-2xl sm:text-3xl underline underline-offset-4 decoration-rose-600 decoration-4 font-bold text-center text-gray-900 mb-6">
        Quick View - {item.name}
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 auto-cols-fr">
        <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
          {/* Image */}
          <img src={item.image} alt={item.name} className="w-full h-76 object-cover rounded-lg" />
          {/* Text Content */}
          <h1 className="mt-6 text-gray-700 text-sm">
            {item.id <= 3 ? "Burger" : "Pizza"}
          </h1>
          <h3 className="mt-6 text-lg font-semibold">{item.name}</h3>
          {/* Price and Quantity */}
          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Rs. {item.price}</span>
            <input
              type="number"
              className="w-16 p-2 border rounded text-center"
              defaultValue="1"
              min="1"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={() => addToCart(item)}
              className="border border-black text-black px-24 py-2 hover:bg-gray-900 hover:text-white transition duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quicknow;