import {
  CardHeader,
  IconContainer,
  MethodSelectContainer,
  PaymentMethodCardBase,
  PaymentMethodContainer,
  RadioBox,
} from "./styles";
import { useContext } from "react";
import { CreditCard, Money, Bank, CurrencyDollar } from "phosphor-react";
import { AdressesContext } from "../../../../hooks/DeliverAdressHook";

export function PaymentMethodList() {
  const { type, definePaymentMethod } = useContext(AdressesContext);

  return (
    <PaymentMethodContainer>
      <PaymentMethodCardBase>
        <CardHeader>
          <IconContainer>
            <CurrencyDollar size={25} />
          </IconContainer>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </CardHeader>
        <MethodSelectContainer>
          <RadioBox
            type="button"
            onClick={() => {
              definePaymentMethod("credito");
            }}
            isActive={type === "credito"}
            activeColor="purple"
          >
            <IconContainer>
              <CreditCard size={21} />
            </IconContainer>
            <span>CRÉDITO</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              definePaymentMethod("debito");
            }}
            isActive={type === "debito"}
            activeColor="purple"
          >
            <IconContainer>
              <Bank size={21} />
            </IconContainer>
            <span>DÉBITO</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              definePaymentMethod("dinheiro");
            }}
            isActive={type === "dinheiro"}
            activeColor="purple"
          >
            <IconContainer>
              <Money size={21} />
            </IconContainer>
            <span>DINHEIRO</span>
          </RadioBox>
        </MethodSelectContainer>
      </PaymentMethodCardBase>
    </PaymentMethodContainer>
  );
}
