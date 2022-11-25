import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--base-card);
  border-radius: 0.5rem 2rem 0.5rem 2rem;
  padding: 1.25rem;
  padding-top: 0;
  padding-bottom: 0.5rem;
  margin-bottom: 5rem;

  img {
    margin-top: -1.5rem;
    width: 7.3rem;
    height: 7.3rem;
  }
`;

export const CoffeeType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span {
    padding: 0.3rem 0.6rem;
    font-weight: 700;
    font-size: 0.7rem;
    background: var(--yellow-light);
    color: var(--yellow-dark);
    border-radius: 10rem;
  }
`;

export const CoffeeName = styled.h3`
  color: var(--base-subtitle);
  margin-bottom: 0.9rem;
  font-size: 1.5rem;
  font-family: "Baloo 2";
  line-height: 130%;
  font-weight: 700;
`;

export const CoffeeDescription = styled.p`
  color: var(--base-label);
  margin-bottom: 1.1rem;
  font-size: 0.95rem;
  font-weight: 400;
`;

export const CoffeePrice = styled.h3`
  color: var(--base-text);
  margin-bottom: 0.9rem;
  font-size: 1.7rem;
  font-family: "Baloo 2";
  line-height: 130%;
  font-weight: 800;
`;

export const PriceCoin = styled.h4`
  color: var(--base-text);
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3.5px;
  }
`;

export const BagHandlerContainer = styled.div`
  width: 7.5rem;
  margin-bottom: 1rem;

  > button {
    width: 2.15rem;
    height: 2.15rem;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.6s;
    background: var(--purple-dark);
    color: var(--base-card);

    &:hover {
      background: var(--normal-purple);
    }
  }
`;

export const BagAmountContent = styled.div`
  flex: 1;
  background: var(--base-button);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
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
  color: var(--light-purple);
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: var(--purple-dark);
  }
`;
