import { createContext, ReactNode, useEffect, useState } from "react";
import { coffees } from "../../utils/coffees";

export interface Coffee {
  id: number;
  types: string[];
  title: string;
  description: string;
  image: string;
  price: number;
  amount: number;
  totalPrice?: string;
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
    return storagedCart ? JSON.parse(storagedCart) : [];
  });

  const [bag, setBag] = useState<Coffee[]>(coffees);

  const addCoffee = async (coffeeId: number) => {
    const coffeeExistInCart = cart.find((item) => item.id === coffeeId);
    const newBag = bag.find((coffee) => coffee.id === coffeeId);

    if (!coffeeExistInCart && newBag) {
      if (newBag.amount < 1) return;
      setCart((old) => [...old, { ...newBag }]);
    }
  };

  const cleanCart = (coffeeId: number) => {
    setBag((old) =>
      old.map((coffee) =>
        coffee.id === coffeeId ? { ...coffee, amount: 0 } : coffee
      )
    );
  };

  const updateBagCoffeeAmount = ({ coffeeId, amount }: UpdateCoffeeAmount) => {
    setBag((old) =>
      old.map((coffee) =>
        coffee.id === coffeeId ? { ...coffee, amount } : coffee
      )
    );
  };

  const updateCoffeeAmount = ({ coffeeId, amount }: UpdateCoffeeAmount) => {
    setCart((old) =>
      old.map((coffee) =>
        coffee.id === coffeeId ? { ...coffee, amount } : coffee
      )
    );
  };

  const deleteCoffee = (coffeeId: number) => {
    setCart((old) => old.filter((coffee) => coffee.id !== coffeeId));
  };

  useEffect(() => {
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(cart));
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
