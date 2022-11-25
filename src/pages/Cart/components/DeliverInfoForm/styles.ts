import styled from "styled-components";

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 42rem;
`;

export const AdressInputCampTitle = styled.h2`
  color: var(--base-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: "Baloo 2";
  margin-top: 3rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 14rem 16rem 4.5rem;
  column-gap: 0.75rem;
  row-gap: 0.9rem;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    border: 1px solid #d5d5d5;
    background: var(--base-input);
    max-height: 4rem;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--base-label);
    }

    &:focus-within {
      border-color: var(--normal-yellow);
    }
  }

  .cep {
    grid-column: span 3;
    max-width: 14rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const FormCardBase = styled.div`
  width: 100%;
  background: var(--base-card);
  border-radius: 6px;
  padding: 2.8rem;
  margin-top: -1rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-areas:
    "iconarea title"
    "iconarea subtitle";
  grid-template-columns: 2rem;
  grid-template-rows: 1.4rem;
  margin-bottom: 2rem;
  gap: 0.3rem;

  .icon {
    grid-area: iconarea;
  }

  h3 {
    color: var(--base-title);
    font-size: 1.2rem;
    font-weight: 400;
    grid-area: title;
  }

  p {
    color: var(--base-text);
    font-size: 1rem;
    grid-area: subtitle;
  }
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 1.5rem;
  color: var(--yellow-dark);
`;
