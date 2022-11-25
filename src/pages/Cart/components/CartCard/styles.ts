import styled from "styled-components";

export const CartCardTitle = styled.h2`
  color: var(--base-title);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Baloo 2";
  margin-top: 3rem;
`;

export const AdressInputCampTitle = styled.h2`
  color: var(--base-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: "Baloo 2";
  margin-top: 3rem;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 30rem;
`;

export const CartCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--base-card);
  border-radius: 1rem 4rem 1rem 4rem;
  padding: 2rem;
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.2rem;
  color: var(--purple-dark);
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceInfo = styled.p`
  color: var(--base-text);
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Total = styled.h2`
  color: var(--base-text);
  font-size: 1.3rem;
  margin-bottom: 2rem;
  margin-top: 1.3rem;
`;

export const ConfirmOrder = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-align: center;
  border-radius: 0.4rem;
  background: var(--normal-yellow);
  padding: 1.2rem;
  margin-bottom: 1rem;

  span {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 700;
  }

  &:disabled {
    filter: brightness(90%);
  }

  &:hover {
    filter: brightness(110%);
  }
`;
