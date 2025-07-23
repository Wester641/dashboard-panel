// import { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

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
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
