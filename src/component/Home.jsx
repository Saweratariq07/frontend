import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Home = () => {
  
  const banners = [
    {
      id: 1,
      img: "/Image/home-img-1.png",
      heading: "Online Order",
      Element: "Delicious Food",
      paragraph: "Delicious Food refers to meals that are not only tasty but also satisfying, well-prepared, and enjoyable to eat. It combines fresh ingredients, balanced flavors, and appealing presentation to create a delightful dining experience. Whether it's a home-cooked dish, a gourmet restaurant meal, or a street food favorite, delicious food excites the taste buds and brings comfort and joy. Great food often includes the perfect blend of spices, textures, and aromas, making every bite memorable.",
      buttonText: "See Menu",
    },
    {
      id: 2,
      img: "/Image/home-img-2.png",
      heading: "Online Order",
      Element: "Chezzy Hamburger",
      paragraph: "A Cheesy Hamburger is a delicious, juicy burger featuring a perfectly grilled beef patty topped with melted cheese, served in a soft, toasted bun. The cheese, often cheddar, American, or Swiss, adds a creamy, rich flavor that enhances the savory taste of the meat. It’s commonly paired with fresh lettuce, tomatoes, pickles, onions, and sauces like ketchup, mustard, or mayo. Some variations include extra layers of cheese, crispy bacon, or a special sauce, making it an irresistible comfort food loved by many.",
      buttonText: "See Menu",
    },
    {
      id: 3,
      img: "/Image/home-img-3.png",
      heading: "Online Order",
      Element: "Rosted Chicken",
      paragraph: "Roasted Chicken is a flavorful and juicy dish made by slow-cooking a whole chicken or chicken pieces in an oven until the skin turns golden brown and crispy. It is typically seasoned with a blend of herbs and spices like garlic, rosemary, thyme, paprika, and black pepper, which infuse the meat with rich, savory flavors. The slow roasting process keeps the chicken tender and moist on the inside while creating a deliciously crispy exterior. Often served with roasted vegetables, mashed potatoes, or a side of gravy, roasted chicken is a classic and comforting meal enjoyed worldwide. ",
      buttonText: "See Menu",
    },
  ];
  const addToCart = () => {
    console.log("Item added to cart!");
    alert("Item added to cart!"); // Temporary feedback
  };
 
    return (
      <div>
          <section className="banner">
          <div className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex justify-center items-center px-4 sm:px-8 lg:px-16">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="flex items-center justify-center">
            <div className="w-full min-h-screen flex justify-center items-center px-4 sm:px-8 lg:px-16">
              <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
                <div className="text-center md:text-left md:w-1/2">
                  <h1 className="text-3xl py-5 md:text-5xl font-bold text-gray-900">{banner.heading}</h1>
                  <em className="not-italic text-2xl font-semibold text-gray-900">{banner.Element}</em>
                  <p className="mt-4 text-lg text-gray-600">{banner.paragraph}</p>
                  <Link to="/menu">
                  <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full shadow-md">
                    {banner.buttonText}
                  </button> 
                  </Link>
                </div>
                <div className="md:w-1/2 flex justify-center ">
                  <img
                    src={banner.img}
                    alt={banner.heading}
                    className="w-full max-w-[500px] h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
          </section>
          <section className="Foodcategory">
            <div className="mt-10 container mx-auto my-4 flex flex-col items-center">
      <h1 className="mt-2 text-2xl sm:text-3xl underline underline-offset-4 decoration-rose-600 decoration-4 font-bold text-center text-gray-900 mb-6">
        FOOD CATEGORY
      </h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-2 gap-4 auto-cols-fr">
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 hover:border-rose-600 rounded-2xl group min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src="./Image/cat-1.png" alt="Heineken logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium  text-gray-900 group-hover:text-rose-600">
            Pizza
          </h5>
        </a>
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 hover:border-rose-600 rounded-2xl group min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src="./Image/cat-2.png" alt="Budweiser logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-rose-600">
            Burger
          </h5>
        </a>
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border  border-gray-200 hover:border-rose-600 rounded-2xl group min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src="./Image/cat-3.png" alt="Carlsberg logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-rose-600">
            Drink
          </h5>
        </a>
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 hover:border-rose-600 rounded-2xl group  min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src="./Image/cat-4.png" alt="Stella Artois logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-rose-600">
            Desserts
          </h5>
        </a>
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
              <Link to="/Cart">
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
          <section>
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
          <Link to="/Quicknow4">
          <img src=".\Image\p1.png" alt="Veggie Pizza" className="w-full h-[282px] object-cover rounded-lg" />
          </Link>
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
            <Link to="/Cart5" onClick={addToCart}>
                <button>
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
            <Link to="/Cart6" onClick={addToCart}>
                <button>
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
      <Link to="/menu">    
          <button type="button" class="mt-20 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-8 py-3.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">View All</button>
      </Link>
            </div>
          </section>
      </div> 
    );
  };
  export default Home;
  