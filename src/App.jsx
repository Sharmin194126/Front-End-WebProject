import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/women"; // Uncomment if you decide to use
import Kids from "./pages/Kids";
import Admin from "./pages/Admin";
import Auth from "./components/Auth";
import AddProduct from "./pages/AddProduct";
import ViewProducts from "./pages/ViewProducts";
import AddOrder from "./pages/AddOrder";
import ViewOrders from "./pages/ViewOrders";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/view-orders" element={<ViewOrders />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
