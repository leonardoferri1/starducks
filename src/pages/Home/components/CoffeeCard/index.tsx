import {
  BagAmountContent,
  BagHandlerContainer,
  CardContainer,
  CardFooter,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
  CoffeeType,
  PriceCoin,
  UpdateAmount,
} from "./styles";
import { Coffee, CartContext } from "../../../../hooks/UseCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { useContext } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffee, updateBagCoffeeAmount, cleanCart } =
    useContext(CartContext);
  const formattedPrice = formatMoney(coffee.price);

  function handleBagCoffeeIncrement(coffee: Coffee) {
    updateBagCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount + 1 });
  }

  function handleBagCoffeeDecrement(coffee: Coffee) {
    updateBagCoffeeAmount({
      coffeeId: coffee.id,
      amount: coffee.amount - 1,
    });
  }

  async function handleAddCoffee(id: number) {
    await addCoffee(id);
    cleanCart(id);
  }

  return (
    <CardContainer key={coffee.id}>
      <img src={coffee.image} alt={coffee.title} />
      <CoffeeType>
        {coffee.types.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </CoffeeType>
      <CoffeeName>{coffee.title}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CardFooter>
        <div>
          <PriceCoin>R$</PriceCoin>
          <CoffeePrice>{formattedPrice}</CoffeePrice>
        </div>

        <BagHandlerContainer>
          <BagAmountContent>
            <UpdateAmount
              onClick={() => handleBagCoffeeDecrement(coffee)}
              disabled={coffee.amount < 1}
            >
              <Minus size={16} weight="fill" />
            </UpdateAmount>
            <p>{coffee.amount}</p>
            <UpdateAmount onClick={() => handleBagCoffeeIncrement(coffee)}>
              <Plus size={16} weight="fill" />
            </UpdateAmount>
          </BagAmountContent>

          <button onClick={() => handleAddCoffee(coffee.id)}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </BagHandlerContainer>
      </CardFooter>
    </CardContainer>
  );
}
