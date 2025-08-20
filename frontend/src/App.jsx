import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CustomerManagement from "./pages/CustomerManagement";
import DueSystem from "./pages/DueSystem";
import HomePage from "./pages/HomePage";
import ProductManagement from "./pages/ProductManagement";
import Revenue from "./pages/Revenue";
import ShoppingHistory from "./pages/ShoppingHistory";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/customers" element={<CustomerManagement />} />
        <Route path="/shopping-history" element={<ShoppingHistory />} />
        <Route path="/due-system" element={<DueSystem />} />
        <Route path="/revenue" element={<Revenue />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
