import styled from "styled-components";

export const CoffeeContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "photoarea titlearea titlearea pricearea"
    "photoarea amountarea removearea pricearea";
  grid-template-columns: 3.5rem;
  grid-template-rows: 2.1rem;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e6e5e5;
  text-align: start;

  .photo {
    grid-area: photoarea;
  }

  .title {
    margin-left: 2.6rem;
    margin-top: 0.5rem;
    grid-area: titlearea;
  }

  .amount {
    margin-left: 2.6rem;
    grid-area: amountarea;
  }

  .remove {
    grid-area: removearea;
  }

  .price {
    grid-area: pricearea;
  }

  img {
    width: 5.2rem;
    height: 5.2rem;
  }
`;

export const CoffeeName = styled.h3`
  color: var(--base-subtitle);
  font-size: 1.1rem;
  font-weight: 400;
`;

export const CartAmountContent = styled.div`
  flex: 1;
  height: 2.2rem;
  background: var(--base-button);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  border-radius: 6px;
  padding: 0.5rem;

  > p {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: var(--base-title);
  }
`;

export const UpdateAmount = styled.button`
  width: 1rem;
  height: 1rem;
  border: none;
  background: none;
  color: var(--normal-purple);
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: var(--purple-dark);
  }
`;

export const CoffeePrice = styled.h3`
  color: var(--base-title);
  font-size: 1.2rem;
  font-weight: 800;
  margin-top: 0.5rem;
`;

export const PriceCoin = styled.h4`
  color: var(--base-text);
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
  font-weight: 400;
`;

const colors = {
  purple: "#EBE5F9",
};

export const RemoveCoffee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  border: none;
  background: var(--base-button);
  margin-bottom: 0.7rem;
  gap: 0.1rem;
  padding: 0.4rem;
  transition: border-color 0.2s;
  border-radius: 0.3rem;
  border: 1px solid #d7d7d7;

  span {
    color: var(--base-text);
    font-size: 0.8rem;
    margin-top: 0.1rem;
    margin-right: 0.2rem;
    font-weight: 400;
  }

  &:hover {
    background: var(--purple-light);
    border-color: var(--normal-purple);
  }
`;

export const IconContainer = styled.div`
  width: 1.5rem;
  height: 1.3rem;
  color: var(--purple-dark);
`;
