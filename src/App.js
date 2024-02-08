
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Header from './component/header/Header'
import Footer from './component/footer/Footer';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import {Toaster} from 'react-hot-toast'
import SingleProduct from './component/product/SingleProduct';
import Cart from './component/cart/Cart';
import Aboutus from './component/About/Aboutus';
import Contact from './component/contact/Contact';
import Product from './component/product/Product';
import { useState } from 'react';
import PrivacyPolicy from './component/Privacy-Policy/PrivacyPolicy';
import Termcondition from './component/Termcondition/Termcondition';
import Shipping from './component/shipping/Shipping';
import Refund from './component/refund/Refund';
import PaymentSuccess from './component/paymentSuccess/PaymentSuccess';
import PayForm from './component/PaymentForms/PayForm';
import OrderForm from './component/cart/OrderForm';
import Profile from './component/Profile/Profile';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
       <Route
            path="/Product-Info/:id"
            element={
              <SingleProduct
                addToCart={setCart}
                cart={cart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} setCart={setCart}  />}
          />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Product />} />
        <Route path="/term" element={<Termcondition/>}/>
        <Route path='/policy' element={<PrivacyPolicy/>}/>
        <Route path='/shipping-policy' element={<Shipping/>}/>
        <Route path='/refund' element={<Refund/>}/>
        <Route path='/Payform' element={<OrderForm/>}/>
        <Route path='/profile' element={<Profile/>}/>

        <Route path='/paymentsuccess/:transication/:value' element={<PaymentSuccess/>}/>

      </Routes>
      <Footer/>
      <Toaster/>
    </BrowserRouter>
    </div>
  );
}

export default App;
