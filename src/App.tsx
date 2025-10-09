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
import ProductDetailPage from "./pages/Products/DetailPage/ProductDetailPage";
import EditForm from "./pages/Products/EditForm/EditForm";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="products/add" element={<ProductsAdd />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="products/:id/edit" element={<EditForm />} />
          <Route path="setting" element={<Settings />} />
          <Route path="logout" element={<LogOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
