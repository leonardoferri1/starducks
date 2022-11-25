import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../hooks/UseCart";

export function Header() {
  const { cart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton className="purple">
            <MapPin size={22} weight="fill" />
            Campo Grande, MS
          </HeaderButton>
          <NavLink to="/cart">
            <HeaderButton className="yellow">
              <span>{cart.length}</span>
              <ShoppingCart size={23} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
