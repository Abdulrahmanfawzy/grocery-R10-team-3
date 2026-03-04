import ProductList from "./pages/productList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import CheckoutPage1 from "./pages/CheckoutPage1";
import CheckoutPage2 from "./pages/CheckoutPage2";
import CheckoutPage3 from "./pages/CheckoutPage3";




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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
