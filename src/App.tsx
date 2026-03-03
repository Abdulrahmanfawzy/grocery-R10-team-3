import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CheckoutPage from "./pages/CheckoutPage";

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
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
