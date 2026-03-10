import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "@/pages/Cart";
import CheckoutPage1 from "@/pages/CheckoutPage1";
import CheckoutPage2 from "@/pages/CheckoutPage2";
import CheckoutPage3 from "@/pages/CheckoutPage3";
import ProductList from "@/pages/productList/ProductList";
import Autho from "@/components/autho/Autho";
import Account from "@/components/account/Account";
import Choose from "@/components/choose/Choose";
import Recovery from "@/components/recovery/Recovery";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
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
  );
};

export default AppRoutes;
