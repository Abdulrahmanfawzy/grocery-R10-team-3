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
import ProfileLayout from "./profileLayout/ProfileLayout";
import Dashboard from "@/pages/profile/Dashboard";
import PersonalInfo from "@/pages/profile/PersonalInfo";
import OrderHistory from "@/pages/profile/OrderHistory";
import Wallet from "@/pages/profile/Wallet";
import SmartList from "@/pages/profile/SmartList";
import Addresses from "@/pages/profile/Addresses";
import Loyalty from "@/pages/profile/Loyalty";
import Security from "@/pages/profile/Security";
import Support from "@/pages/profile/Support";
import Settings from "@/pages/profile/Settings";
import CategoryPage from "@/pages/Category/CategoryPage";
import LoginPage from "@/pages/login/LoginPage";
import SignUpPage from "@/pages/signup/SignUpPage";

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
                  <Route path="/categories" element={<CategoryPage />} />
                  <Route path="/profile" element={<ProfileLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="personal-info" element={<PersonalInfo />} />
                    <Route path="order-history" element={<OrderHistory />} />
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="info" element={<PersonalInfo />} />
                    <Route path="orders-history" element={<OrderHistory />} />
                    <Route path="payments-wallet" element={<Wallet />} />
                    <Route path="smart-list" element={<SmartList />} />
                    <Route path="addresses" element={<Addresses />} />
                    <Route path="loyalty" element={<Loyalty />} />
                    <Route path="security" element={<Security />} />
                    <Route path="support" element={<Support />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
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
