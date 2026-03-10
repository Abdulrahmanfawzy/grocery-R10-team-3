import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage1 from "@/pages/CheckoutPage1";
import CheckoutPage2 from "@/pages/CheckoutPage2";
import CheckoutPage3 from "@/pages/CheckoutPage3";
import ProductList from "@/pages/productList/ProductList";
import Autho from "@/components/autho/Autho";
import Account from "@/components/account/Account";
import Choose from "@/components/choose/Choose";
import Recovery from "@/components/recovery/Recovery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect, type ReactNode } from "react";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import MainLayout from "./MainLayout";
import { CartProvider } from "@/context/CartContext";
import { Provider } from "react-redux";
import { store } from "@/lib/store/store";

const AppRoutes = () => {
  const AuthInitializer = ({ children }: { children: ReactNode }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const init = async () => {
        const fixedToken =
          "355|DaHfhqKU7rcbUYuq0GJSOiyZVT4c0QHWU7ENaoSP141eb587";
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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 1,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthInitializer>
            <CartProvider>
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/shop" element={<ProductList />} />
                  <Route path="/checkout1" element={<CheckoutPage1 />} />
                  <Route path="/checkout2" element={<CheckoutPage2 />} />
                  <Route path="/checkout3" element={<CheckoutPage3 />} />
                  <Route path="/login" element={<Autho />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/Choose" element={<Choose />} />
                  <Route path="/Recovery" element={<Recovery />} />
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
    </Provider>
  );
};

export default AppRoutes;
