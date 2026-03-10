import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect, type ReactNode } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MainLayout from "./components/layout/MainLayout";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const AuthInitializer = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // Set the fixed token requested by the user
      const fixedToken = "355|DaHfhqKU7rcbUYuq0GJSOiyZVT4c0QHWU7ENaoSP141eb587";
      localStorage.setItem("token", fixedToken);
      console.log("[Auth] Fixed token set in localStorage.");
      setIsReady(true);
    };
    init();
  }, []);

  if (!isReady) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ fontSize: "1.2rem", color: "#555" }}>Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthInitializer>
          <CartProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="*"
                  element={
                    <div className="p-20 text-center">Page Not Found</div>
                  }
                />
              </Routes>
            </MainLayout>
          </CartProvider>
        </AuthInitializer>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
