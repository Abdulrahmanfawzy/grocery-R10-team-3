import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AppRoutes from "@/components/layout/AppRoutes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AppRoutes/>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
