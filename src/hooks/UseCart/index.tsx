import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

export interface Coffee {
  id: number;
  types: string[];
  title: string;
  description: string;
  image: string;
  price: number;
  amount: number;
  totalPrice: string;
}

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateCoffeeAmount {
  coffeeId: number;
  amount: number;
}

interface CartContextData {
  cart: Coffee[];
  bag: Coffee[];
  cleanCart: (coffeeId: number) => void;
  addCoffee: (coffeeId: number) => Promise<void>;
  deleteCoffee: (coffeeId: number) => void;
  updateCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmount) => void;
  updateBagCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmount) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const cartLocalStorageKey = "@coffee-delivery:cart-info";

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem(cartLocalStorageKey);

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });
  const [bag, setBag] = useState<Coffee[]>([]);

  useEffect(() => {
    async function loadProducts() {
      api.get("/coffees").then(({ data }) => setBag(data));
    }

    loadProducts();
  }, []);

  console.log(cart);

  const addCoffee = async (coffeeId: number) => {
    const coffeeExistInCart = cart.find((item) => item.id === coffeeId);
    const newBag = bag.find((coffee) => coffee.id === coffeeId);

    // if (coffeeExistInCart) {
    //   throw in some error
    // }

    if (!coffeeExistInCart && newBag) {
      if (newBag.amount < 1) {
        return;
      }
      setCart((old) => [...old, { ...newBag }]);
    }
  };

  const cleanCart = (coffeeId: number) => {
    const newBag = [...bag];

    setBag((old) => {
      return old.map((coffee) => {
        if (coffee.id === coffeeId) {
          coffee.amount = 0;
        }
        return coffee;
      });
    });
  };

  const updateBagCoffeeAmount = ({ coffeeId, amount }: UpdateCoffeeAmount) => {
    const newBag = [...bag];
    const newListBag = newBag.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.amount = amount;
      }
      return coffee;
    });
    setBag(newListBag);
  };

  const updateCoffeeAmount = ({ coffeeId, amount }: UpdateCoffeeAmount) => {
    const newCart = [...cart];

    const newListCart = newCart.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.amount = amount;
      }
      return coffee;
    });

    setCart(newListCart);
  };

  const deleteCoffee = (coffeeId: number) => {
    const newCart = cart.filter((coffee) => coffee.id !== coffeeId);
    setCart(newCart);
  };

  useEffect(() => {
    const substitute = JSON.stringify(cart);
    localStorage.setItem(cartLocalStorageKey, substitute);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cleanCart,
        cart,
        bag,
        addCoffee,
        deleteCoffee,
        updateCoffeeAmount,
        updateBagCoffeeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
