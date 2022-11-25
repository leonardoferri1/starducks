import {
  CartCardContent,
  CartCardTitle,
  CartContainer,
  ConfirmOrder,
  PriceInfo,
  TextContainer,
  Total,
} from "./styles";

import { useContext } from "react";
import { CartContext } from "../../../../hooks/UseCart";
import { CoffeeInfo } from "../CoffeeInfo";
import { formatPrice } from "../../../../utils/format";

export function CartCard() {
  const { cart } = useContext(CartContext);

  const cartFormatted = cart.map((coffee) => ({
    ...coffee,
    totalPrice: formatPrice(coffee.price * coffee.amount),
  }));

  const cartTotal = formatPrice(
    cart.reduce((sumTotal, coffee) => {
      return sumTotal + coffee.price * coffee.amount;
    }, 0)
  );

  const total = formatPrice(
    cart.reduce((sumTotal, coffee) => {
      return sumTotal + coffee.price * coffee.amount;
    }, 0) + 3.9
  );

  return (
    <CartContainer>
      <CartCardTitle>Cafés selecionados</CartCardTitle>
      <CartCardContent>
        {cartFormatted.map((coffee) => (
          <CoffeeInfo key={coffee.id} coffee={coffee} />
        ))}
        <TextContainer>
          <div>
            <PriceInfo>Total de itens</PriceInfo>
            <PriceInfo>{cartTotal}</PriceInfo>
          </div>
          <div>
            <PriceInfo>Entrega</PriceInfo>
            <PriceInfo>R$ 3,90</PriceInfo>
          </div>
          <div>
            <Total>Total</Total>
            <Total>{total}</Total>
          </div>
        </TextContainer>
        <ConfirmOrder type="submit">
          <span>CONFIRMAR PEDIDO</span>
        </ConfirmOrder>
      </CartCardContent>
    </CartContainer>
  );
}

{
  /* <CartCardContent>
{cart.map((coffee) => (
  <CoffeeInfo key={coffee.id} coffee={coffee} />
))}
</CartCardContent> */
}
