import { BrowserRouter } from "react-router-dom";
import { AdressesProvider } from "./hooks/DeliverAdressHook";
import { CartProvider } from "./hooks/UseCart";
import { Router } from "./Routes";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <AdressesProvider>
      <CartProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </AdressesProvider>
  );
}

export default App;
