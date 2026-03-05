import ProductList from "./pages/productList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import CheckoutPage1 from "./pages/CheckoutPage1";
import CheckoutPage2 from "./pages/CheckoutPage2";
import CheckoutPage3 from "./pages/CheckoutPage3";

import Autho from "./components/autho/Autho";
import Account from "./components/account/Account";

import Recovery from "./components/recovery/Recovery";
import Choose from "./components/choose/Choose";
import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/checkout1" element={<CheckoutPage1 />} />
          <Route path="/checkout2" element={<CheckoutPage2 />} />
          <Route path="/checkout3" element={<CheckoutPage3 />} />
          <Route path="/login" element={<Autho />} />
          <Route path="/account" element={<Account />} />
          <Route path="/Choose" element={<Choose />} />
          <Route path="/Recovery" element={<Recovery />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
