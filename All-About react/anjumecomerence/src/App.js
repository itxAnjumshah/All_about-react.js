import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbarh from "./Components/Navbar/Navbarh";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import Loginsignup from "./Pages/Loginsignup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarh />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
          <Route path="/product/:productId" element={<Product />} />

            {/* <Route path=":productId" element={<Product />} /> */}
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
