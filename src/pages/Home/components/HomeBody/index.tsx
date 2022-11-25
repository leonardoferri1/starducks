import { useContext } from "react";
import { CartContext } from "../../../../hooks/UseCart";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeCatalog, HomeBodyContainer, HomeBodyTitle } from "./styles";

export function HomeBody() {
  const { bag } = useContext(CartContext);

  return (
    <HomeBodyContainer>
      <HomeBodyTitle>Nossos cafés</HomeBodyTitle>
      <CoffeeCatalog>
        {bag.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeCatalog>
    </HomeBodyContainer>
  );
}
