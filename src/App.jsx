import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Shop from "./pages/MohamedKamel/Shop";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import AboutUsPage from "./pages/AboutUsPage";
import Contact from "./pages/MoTolba/Contact";
<<<<<<< HEAD
import CartPage from "./pages/CartPage";
=======
import Login from "./loginpage/Login"
import WishlistPage from "./pages/WishlistPage";
>>>>>>> 8393cb12bd857c9943ce4697b1bc6bdff5d3f20b

export default function App() {
  return (
    <div className="w-full  bg-white text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="AboutUs" element={<AboutUsPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="products" element={<Product />} />
            <Route
              path="products/:category_id"
              element={<h1>Products By Category</h1>}
            />
            <Route
              path="products/:product_id"
              element={<h1>Prodcut Details</h1>}
            />
            <Route path="about" element={<h1>About Us Page Details</h1>} />
            <Route path="contact" element={<Contact />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Cart" element={<CartPage />} />

          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<h1>404 Page | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
