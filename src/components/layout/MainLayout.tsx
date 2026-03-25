import Navbar from "./Navbar";
import Footer from "./Footer";
import { TokenTester } from "../dev/TokenTester";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <TokenTester />
    </div>
  );
};

export default MainLayout;
