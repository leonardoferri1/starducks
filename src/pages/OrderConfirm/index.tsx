import { Header } from "../../components/Header";
import {
  ConfirmHeaderSubtitle,
  ConfirmHeaderTitle,
  GeneralContainer,
  IconContainer,
  InfoSection,
  OrderConfirmContainer,
  OrderInfoContainer,
} from "./styles";
import DeliveryImg from "../../assets/Delivery.svg";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { AdressesContext } from "../../hooks/DeliverAdressHook";

export function OrderConfirmPage() {
  const { adresses, type } = useContext(AdressesContext);

  return (
    <GeneralContainer>
      <Header />
      <OrderConfirmContainer>
        <div>
          <ConfirmHeaderTitle>Uhu! Pedido confirmado</ConfirmHeaderTitle>
          <ConfirmHeaderSubtitle>
            Agora é só aguardar que logo o café chegará até você
          </ConfirmHeaderSubtitle>
        </div>
        <InfoSection>
          <OrderInfoContainer className="gradient-border">
            <div>
              <IconContainer className="purple">
                <MapPin size={18} weight="fill" />
              </IconContainer>
              <span>
                Entrega em{" "}
                <strong>
                  {adresses.street}, {adresses.number}
                </strong>
                <br />
                {adresses.district} - {adresses.city}, {adresses.uf}
              </span>
            </div>
            <div>
              <IconContainer className="yellow">
                <Clock size={18} weight="fill" />
              </IconContainer>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
            <div>
              <IconContainer className="orange">
                <CurrencyDollar size={18} weight="fill" />
              </IconContainer>
              <span>
                Pagamento na entrega
                <br />
                <strong>{type}</strong>
              </span>
            </div>
          </OrderInfoContainer>
          <img src={DeliveryImg} />
        </InfoSection>
      </OrderConfirmContainer>
    </GeneralContainer>
  );
}
