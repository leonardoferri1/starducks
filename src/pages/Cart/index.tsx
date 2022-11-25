import { Header } from "../../components/Header";
import { CartCard } from "./components/CartCard";
import { DeliverInfoForm } from "./components/DeliverInfoForm";
import { PaymentMethodList } from "./components/PaymentMethodList";
import { CompleteOrderForm, GeneralContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Adress, AdressesContext } from "../../hooks/DeliverAdressHook";

const confirmOrderSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string(),
});

type OrderData = zod.infer<typeof confirmOrderSchema>;

export function CartPage() {
  const { createAdress } = useContext(AdressesContext);

  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirmOrderSchema),
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();

  function handleConfirmOrder(data: OrderData) {
    createAdress(data);
    navigate("/confirmOrder");
  }

  return (
    <GeneralContainer>
      <FormProvider {...confirmOrderForm}>
        <Header />
        <CompleteOrderForm onSubmit={handleSubmit(handleConfirmOrder)}>
          <div className="form">
            <DeliverInfoForm />
          </div>
          <div className="type">
            <PaymentMethodList />
          </div>
          <div className="cart">
            <CartCard />
          </div>
        </CompleteOrderForm>
      </FormProvider>
    </GeneralContainer>
  );
}
