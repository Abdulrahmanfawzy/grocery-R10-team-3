import ProductList from "./pages/productList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import CheckoutPage1 from "./pages/CheckoutPage1";
import CheckoutPage2 from "./pages/CheckoutPage2";
import CheckoutPage3 from "./pages/CheckoutPage3";

import Autho from'../src/components/autho/Autho'
import Account from '../src/components/account/Account'
import Choose from '../src/components/choose/Choose'
import Recovery from '../src/components/recovery/Recovery'


const App=()=>{
  return(
    <div>
   <BrowserRouter>


   
    <Routes>
      <Route path='/' element={<Autho/>}/>
      <Route path='/account' element={<Account/>}/>

     <Route path='/Choose' element={<Choose/>}/>
 

<Route path='/Recovery' element={<Recovery/>}/>

      </Routes>
   

</BrowserRouter>
  





























    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/checkout1" element={<CheckoutPage1 />} />
          <Route path="/checkout2" element={<CheckoutPage2 />} />
          <Route path="/checkout3" element={<CheckoutPage3 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
