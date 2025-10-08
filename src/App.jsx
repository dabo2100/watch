import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <div className="w-full h-dvh overflow-auto bg-white text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<h1>Home Page</h1>} />
            <Route path="products" element={<h1>Home Page</h1>} />
            <Route
              path="products/:category_id"
              element={<h1>Products By Category</h1>}
            />
            <Route
              path="products/:product_id"
              element={<h1>Prodcut Details</h1>}
            />
            <Route path="about" element={<h1>About Us Page Details</h1>} />
            <Route path="Shop" element={<Shop/>} />

          </Route>
          <Route path="*" element={<h1>404 Page | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
