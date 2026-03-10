import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AppRoutes from "@/components/layout/AppRoutes";
import { TokenTester } from "@/components/dev/TokenTester";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AppRoutes />
      <Footer />
      <TokenTester />
    </QueryClientProvider>
  );
};

export default App;
