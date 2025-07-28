// import { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Overview/Overview";
import Layout from "./layout/Layouts";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Settings from "./pages/Settings/Settings";
import LogOut from "./pages/Logout/LogOut";
import ProductsAdd from "./pages/Products/AddForm/ProductsAdd";

// import axios from "axios";

function App() {
  // useEffect(() => {`
  //   axios.get("http://192.168.0.32:8000/api/v1/products/").then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="products/add" element={<ProductsAdd />} />
          <Route path="setting" element={<Settings />} />
          <Route path="logout" element={<LogOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
