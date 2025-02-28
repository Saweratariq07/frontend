import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Foodcard3 from "./component/Foodcard3";
import Footer from "./component/Footer";
import Preloader from "./component/Preloader";
import About from "./component/About";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Order from "./component/Order";
import ContactUs from "./component/ContactUs";
import Search from "./component/Search";
import User from "./component/User";
import Cart from "./component/Cart";

// Importing Quicknow Components
import Quicknow from "./component/Quicknow";
import Quicknow2 from "./component/Quicknow2";
import Quicknow3 from "./component/Quicknow3";
import Quicknow4 from "./component/Quicknow4";
import Quicknow5 from "./component/Quicknow5";
import Quicknow6 from "./component/Quicknow6";
import Quicknow7 from "./component/Quicknow7";
import Quicknow8 from "./component/Quicknow8";
import Quicknow9 from "./component/Quicknow9";
import Quicknow10 from "./component/Quicknow10";
import Quicknow11 from "./component/Quicknow11";
import Quicknow12 from "./component/Quicknow12";

// Importing Cart Components
import Cart2 from "./component/Cart2";
import Cart3 from "./component/Cart3";
import Cart4 from "./component/Cart4";
import Cart5 from "./component/Cart5";
import Cart6 from "./component/Cart6";
import Cart7 from "./component/Cart7";
import Cart8 from "./component/Cart8";
import Cart9 from "./component/Cart9";
import Cart10 from "./component/Cart10";
import Cart11 from "./component/Cart11";
import Cart12 from "./component/Cart12";

function Layout() {
  const location = useLocation();
  const hideFooterAndCard = location.pathname === "/search";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />

        {/* Quicknow Routes */}
        <Route path="/quicknow" element={<Quicknow />} />
        <Route path="/quicknow2" element={<Quicknow2 />} />
        <Route path="/quicknow3" element={<Quicknow3 />} />
        <Route path="/quicknow4" element={<Quicknow4 />} />
        <Route path="/quicknow5" element={<Quicknow5 />} />
        <Route path="/quicknow6" element={<Quicknow6 />} />
        <Route path="/quicknow7" element={<Quicknow7 />} />
        <Route path="/quicknow8" element={<Quicknow8 />} />
        <Route path="/quicknow9" element={<Quicknow9 />} />
        <Route path="/quicknow10" element={<Quicknow10 />} />
        <Route path="/quicknow11" element={<Quicknow11 />} />
        <Route path="/quicknow12" element={<Quicknow12 />} />

        {/* Cart Routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart2" element={<Cart2 />} />
        <Route path="/cart3" element={<Cart3 />} />
        <Route path="/cart4" element={<Cart4 />} />
        <Route path="/cart5" element={<Cart5 />} />
        <Route path="/cart6" element={<Cart6 />} />
        <Route path="/cart7" element={<Cart7 />} />
        <Route path="/cart8" element={<Cart8 />} />
        <Route path="/cart9" element={<Cart9 />} />
        <Route path="/cart10" element={<Cart10 />} />
        <Route path="/cart11" element={<Cart11 />} />
        <Route path="/cart12" element={<Cart12 />} />
      </Routes>

      {!hideFooterAndCard && (
        <>
          <Foodcard3 />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout); // Cleanup to prevent memory leaks
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Layout />
        </Router>
      )}
    </div>
  );
}

export default App;
