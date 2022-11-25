import {
  CartAmountContent,
  CoffeeContent,
  CoffeeName,
  CoffeePrice,
  IconContainer,
  RemoveCoffee,
  UpdateAmount,
} from "./styles";

import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext, Coffee } from "../../../../hooks/UseCart";

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeInfo({ coffee }: CoffeeProps) {
  const { deleteCoffee, updateCoffeeAmount } = useContext(CartContext);

  function handleCoffeeIncrement(coffee: Coffee) {
    updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount + 1 });
  }

  function handleCoffeeDecrement(coffee: Coffee) {
    updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount - 1 });
  }

  function handleRemoveCoffee(coffeeId: number) {
    deleteCoffee(coffeeId);
  }

  return (
    <CoffeeContent>
      <img src={coffee.image} className="photo" />
      <CoffeeName className="title">{coffee.title}</CoffeeName>
      <CartAmountContent className="amount">
        <UpdateAmount
          type="button"
          data-testid="decrement-product"
          disabled={coffee.amount <= 1}
          onClick={() => handleCoffeeDecrement(coffee)}
        >
          <Minus size={16} weight="fill" />
        </UpdateAmount>
        <p>{coffee.amount}</p>
        <UpdateAmount
          type="button"
          data-testid="increment-coffee"
          onClick={() => handleCoffeeIncrement(coffee)}
        >
          <Plus size={16} weight="fill" />
        </UpdateAmount>
      </CartAmountContent>
      <RemoveCoffee
        type="button"
        data-testid="remove-product"
        onClick={() => handleRemoveCoffee(coffee.id)}
        className="remove"
      >
        <IconContainer>
          <Trash size={20} />
        </IconContainer>
        <span>REMOVER</span>
      </RemoveCoffee>
      <div>
        <CoffeePrice className="price">{coffee.totalPrice}</CoffeePrice>
      </div>
    </CoffeeContent>
  );
}
