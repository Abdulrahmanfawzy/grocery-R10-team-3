import ProductList from "./pages/productList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/shop" element={<ProductList />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
