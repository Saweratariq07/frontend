import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  const addToCart = () => {
    alert("Item added to cart!"); // Yeh message show karega
  };
  return (
    <div>
        <section className="header">
      <div className="w-full bg-gray-900 text-white text-center py-8">  
           <div className="container mx-auto px-4">
              <h1 className="font-semibold text-6xl md:text-6xl text-s">Menu</h1>
              <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
                <Link to="/home" className="text-2xl text-yellow-400 hover:text-yellow-500 transition">home</Link>
                <em className="text-2xl not-italic text-md text-gray-200">/ menu</em>
              </div>
           </div>     
        </div> 
        </section>
        <section className="Foodcard">
            <div className='mt-[100px] container mx-auto my-4 flex flex-col items-center'>
        <h1 className="mt-2 text-2xl sm:text-3xl underline underline-offset-4 decoration-rose-600 decoration-4 font-bold text-center text-gray-900 mb-6">
          LATEST DISHES
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 auto-cols-fr">
          <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
            <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">

              <div className="bg-white p-2 rounded-full shadow-md">
                <Link to="/Quicknow">
                <button>
                  <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                </button>
                </Link>
              </div>
              {/* Cart Button */}
              <div className="bg-white p-2 rounded-full shadow-md">
              <Link to="/Cart1">
                <button onClick={addToCart}>
                  <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                </button>   
                </Link>
              </div>
            </div>
            {/* Image */}
            <img src=".\Image\a.png" alt="Zinger Burger" className="w-full h-76 object-cover rounded-lg" />
            {/* Text Content */}
            <h1 className="mt-6 text-gray-700 text-sm">Burger</h1>
            <h3 className="mt-6 text-lg font-semibold">Zinger Burger</h3>
            {/* Price and Quantity */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Rs. 550</span>
              <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
            </div>
          </div>

          {/* Food Card 2 */}
          <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
            {/* Buttons Wrapper */}
            <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Eye Button */}
              <div className="bg-white p-2 rounded-full shadow-md">
              <Link to="/Quicknow2">
                <button>
                  <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                </button>
                </Link>
              </div>
              {/* Cart Button */}
              <div className="bg-white p-2 rounded-full shadow-md">
              <Link to="/Cart2">
                <button onClick={addToCart}>
                  <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                </button>   
                </Link>
              </div>
            </div>
            {/* Image */}
            <img src="/Image/bg.png" alt="Zinger Burger" className="w-full h-76 object-cover rounded-lg" />
            {/* Text Content */}
            <h1 className="mt-6  text-gray-700 text-sm">Burger</h1>
            <h3 className="mt-6 text-lg font-semibold">Krunch Burger</h3>
            {/* Price and Quantity */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Rs. 350</span>
              <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
            </div>
          </div>

          {/* Food Card 3 */}
          <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
            {/* Buttons Wrapper */}
            <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Eye Button */}
              <div className="bg-white p-2 rounded-full shadow-md">
              <Link to="/Quicknow3">
                <button>
                  <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                </button>
                </Link>
              </div>
              {/* Cart Button */}
              <div className="bg-white p-2 rounded-full shadow-md">
              <Link to="/Cart3">
                <button onClick={addToCart}>
                  <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                </button>   
                </Link>
              </div>
            </div>
            {/* Image */}
            <img src="/Image/z1.png" alt="Zinger Burger" className="w-full h-76 object-cover rounded-lg" />
            {/* Text Content */}
            <h1 className="mt-6 text-gray-700 text-sm">Burger</h1>
            <h3 className="mt-6 text-lg font-semibold">Krunch Chicken Combo</h3>
            {/* Price and Quantity */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Rs. 520</span>
              <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
            </div>
          </div>
        </div>
            </div>
        </section>
        <section className='Foodcard1'>
            <div className='container mx-auto my-4 flex flex-col items-center'>
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 auto-cols-fr">
                    {/* Food Card 1 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Quicknow4">
                          <button>
                            <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                          </button>
                        </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart4">
                        <button onClick={addToCart}>
                          <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                        </button>   
                        </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\p1.png" alt="Veggie Pizza" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Pizza</h1>
                    <h3 className="mt-6 text-lg font-semibold">Veggie Pizza</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 1500</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>

                    {/* Food Card 2 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Quicknow5">
                          <button>
                            <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                          </button>
                        </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart5">
                          <button onClick={addToCart}>
                            <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                          </button>   
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\p2.png" alt="Pizza Chicken Tikka" className="w-full h-76 object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Pizza</h1>
                    <h3 className="mt-6 text-lg font-semibold">Pizza Chicken Tikka</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 2500</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>

                    {/* Food Card 3 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Quicknow6">
                        <button>
                          <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                        </button>
                        </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart6">
                          <button onClick={addToCart}>
                            <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                          </button>   
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\p3.png" alt="Creamy Chicken Delight" className="w-full h-76 object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Pizza</h1>
                    <h3 className="mt-6 text-lg font-semibold">Creamy Chicken Delight</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 3000</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>
                </div>
                </div>
        </section>
        <section className='Foodcard2'>
            <div className='container mx-auto my-4 flex flex-col items-center'>
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 auto-cols-fr">
                    {/* Food Card 1 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <Link to="/Quicknow7">
                            <button>
                                <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <Link to="/Cart7">
                            <button onClick={addToCart}>
                                <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\d1.png" alt="Veggie Pizza" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Desserts</h1>
                    <h3 className="mt-6 text-lg font-semibold">Roasted strawberry crumble</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 5000</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>

                    {/* Food Card 2 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <Link to="/Quicknow8">
                            <button>
                                <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart8">
                            <button onClick={addToCart}> 
                                <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\d2.png" alt="Pizza Chicken Tikka" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Desserts</h1>
                    <h3 className="mt-6 text-lg font-semibold">Angel food cake</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 2000</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>

                    {/* Food Card 3 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <Link to={"/Quicknow9"}>
                            <button>
                                <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                            </button>
                          </Link> 
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart9">
                            <button onClick={addToCart}>
                                <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\d3.png" alt="Creamy Chicken Delight" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Desserts</h1>
                    <h3 className="mt-6 text-lg font-semibold">Almond and date cake</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 1200</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>
                </div>
                </div>
        </section>
        <section className='Foodcard3'>
            <div className='container mx-auto my-4 flex flex-col items-center'>
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 auto-cols-fr">
                    {/* Food Card 1 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <Link to="/Quicknow10">
                            <button>
                                <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart10">
                            <button onClick={addToCart}>
                                <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\a3.png" alt="Red Bull" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Drink</h1>
                    <h3 className="mt-6 text-lg font-semibold">Red Bull</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 500</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>

                    {/* Food Card 2 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <Link to="/Quicknow11">
                            <button>
                                <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart11">
                            <button onClick={addToCart}>
                                <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\a1.png" alt="Pizza Chicken Tikka" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Drink</h1>
                    <h3 className="mt-6 text-lg font-semibold">Coke</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 100</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>

                    {/* Food Card 3 */}
                    <div className="border rounded-lg p-4 bg-white shadow-lg w-80 relative group">
                    {/* Buttons Wrapper */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Quicknow12">
                            <button>
                                <img src="/Svg/eye-solid.svg" alt="View" className="w-5 h-5" />
                            </button>
                        </Link>
                        </div>
                        {/* Cart Button */}
                        <div className="bg-white p-2 rounded-full shadow-md">
                        <Link to="/Cart12">
                            <button onClick={addToCart}>
                                <img src="/Svg/cart-shopping-solid.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <img src=".\Image\a2.png" alt="Creamy Chicken Delight" className="w-full h-[282px] object-cover rounded-lg" />
                    {/* Text Content */}
                    <h1 className="mt-6 text-gray-700 text-sm">Drink</h1>
                    <h3 className="mt-6 text-lg font-semibold">Sprite</h3>
                    {/* Price and Quantity */}
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Rs. 1200</span>
                        <input type="number" className="w-16 p-2 border rounded text-center" defaultValue="1" min="1" />
                    </div>
                    </div>
                </div>
                </div>
        </section>
    </div>
  )
}

export default Menu
