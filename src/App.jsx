import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Shop from './pages/MohamedKamel/Shop';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import AboutUsPage from './pages/AboutUsPage';
import Contact from './pages/MoTolba/Contact';
import CartPage from './pages/CartPage';
import Login from './loginpage/Login';
import WishlistPage from './pages/WishlistPage';
import Details from './pages/details/Details';
import { Toaster } from 'react-hot-toast';
import ErorrPage from './pages/ErorrPage';

export default function App() {
  return (
    <div className="w-full  bg-white text-black">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route path="AboutUs" element={<AboutUsPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="products" element={<Product />} />
            <Route path="products/:category_id" element={<h1>Products By Category</h1>} />
            <Route path="products/:product_id" element={<h1>Prodcut Details</h1>} />
            {/* <Route path="Details" element={<Details />} /> */}
            <Route path="about" element={<h1>About Us Page Details</h1>} />
            <Route path="contact" element={<Contact />} />

            {/* pa */}
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:watch_id" element={<Details />} />
            <Route path="Cart" element={<CartPage />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<ErorrPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
