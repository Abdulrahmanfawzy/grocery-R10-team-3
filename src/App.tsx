import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
