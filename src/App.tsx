import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CheckoutPage1 from "./pages/CheckoutPage1";
import CheckoutPage2 from "./pages/CheckoutPage2";
import CheckoutPage3 from "./pages/CheckoutPage3";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route
              path="/"
              element={<div>Home Page (Under Construction)</div>}
            />
            <Route path="/checkout1" element={<CheckoutPage1 />} />
            <Route path="/checkout2" element={<CheckoutPage2 />} />
            <Route path="/checkout3" element={<CheckoutPage3 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
