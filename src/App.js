import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
// import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import Success from "./pages/Success";
function App() {
  // const user = useSelector((state) => state.user.currentUser.token);
  const user = localStorage.getItem("Authorization");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={user !== null ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user !== null ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/products/" element={<ProductList />}>
          <Route path="/products/:category" element={<ProductList />} />
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path="/product:id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
