import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/Cart";
import { HomePage } from "./pages/Home";
import { OrderConfirmPage } from "./pages/OrderConfirm";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/confirmOrder" element={<OrderConfirmPage />} />
    </Routes>
  );
}
