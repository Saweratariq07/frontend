import { Link } from "react-router-dom";
const Quicknow4 = () => {
    return (
      <div>
        <div className="mt-10 container mx-auto my-4 flex flex-col items-center">
          <h1 className="mt-2 text-2xl sm:text-3xl underline underline-offset-4 decoration-rose-600 decoration-4 font-bold text-center text-gray-900 mb-6">
            Quick View 
            </h1>
         <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
            {/* Image */}
            <img src=".\Image\p1.png" alt="Veggie Pizza" className="w-full h-[282px] object-cover rounded-lg" />
            {/* Text Content */}
            <h1 className="mt-6  text-gray-700 text-sm">Pizza</h1>
            <h3 className="mt-6 text-lg font-semibold">Veggie Pizza</h3>
            {/* Price and Quantity */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Rs. 1500</span>
              <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
            </div>
            <div className="mt-1">
            <button className="border border-black text-black px-24 py-2 hover:bg-gray-900 hover:text-white transition duration-300">
              Add To Cart
            </button>
            </div>
          </div>
      </div>
      </div>
    );
  };
  
  export default Quicknow4;
  
