import { createContext, useState, ReactNode, useEffect, useMemo } from "react";

export interface Adress {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

interface AdressesProviderProps {
  children: ReactNode;
}

interface AdressesContextData {
  type: string;
  adresses: Adress;
  createAdress: (adressInput: Adress) => void;
  definePaymentMethod: (adressInput: string) => void;
}

export const AdressesContext = createContext<AdressesContextData>(
  {} as AdressesContextData
);

const adressesLocalStorageKey = "@coffee-delivery:adress-info";
const paymentLocalStorageKey = "@coffee-delivery:payment-method";

export function AdressesProvider({ children }: AdressesProviderProps) {
  const [type, setType] = useState(() => {
    const storage = localStorage.getItem(paymentLocalStorageKey);
    return storage ? JSON.parse(storage) : "";
  });
  const [adresses, setAdress] = useState<Adress>(() => {
    const storage = localStorage.getItem(adressesLocalStorageKey);
    return storage
      ? JSON.parse(storage)
      : {
          cep: "",
          rua: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: "",
        };
  });

  const definePaymentMethod = (Type: string) => {
    switch (Type) {
      case "credito":
        setType("Cartão de Crédito");
        break;
      case "debito":
        setType("Cartão de Débito");
        break;
      case "dinheiro":
        setType("Em Dinheiro");
        break;
    }
  };

  const createAdress = (adressInput: Adress) => {
    setAdress((old) => ({ ...old, ...adressInput }));
  };

  useEffect(() => {
    const substitute = JSON.stringify(adresses);
    localStorage.setItem(adressesLocalStorageKey, substitute);
  }, [adresses]);

  useEffect(() => {
    const substitute = JSON.stringify(type);
    localStorage.setItem(paymentLocalStorageKey, substitute);
  }, [type]);

  const value = useMemo(
    () => ({
      adresses,
      createAdress,
      type,
      definePaymentMethod,
    }),
    [adresses, createAdress, type, definePaymentMethod]
  );

  return (
    <AdressesContext.Provider value={value}>
      {children}
    </AdressesContext.Provider>
  );
}
