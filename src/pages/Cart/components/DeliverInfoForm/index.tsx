import {
  AdressInputCampTitle,
  CardHeader,
  FormCardBase,
  FormContainer,
  IconContainer,
  OrderFormContainer,
} from "./styles";
import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export function DeliverInfoForm() {
  const { register } = useFormContext();

  return (
    <OrderFormContainer>
      <AdressInputCampTitle>Complete seu pedido</AdressInputCampTitle>
      <FormCardBase>
        <CardHeader>
          <IconContainer>
            <MapPinLine size={25} />
          </IconContainer>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </CardHeader>
        <FormContainer>
          <input
            type="number"
            className="cep"
            placeholder="CEP"
            {...register("cep")}
          />
          <input className="street" placeholder="Rua" {...register("street")} />
          <input type="number" placeholder="Número" {...register("number")} />
          <input
            className="complement"
            placeholder="Complemento"
            {...register("complement")}
          />
          <input placeholder="Bairro" {...register("district")} />
          <input placeholder="Cidade" {...register("city")} />
          <input placeholder="UF" {...register("uf")} />
        </FormContainer>
      </FormCardBase>
    </OrderFormContainer>
  );
}
