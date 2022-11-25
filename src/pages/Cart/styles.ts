import styled from "styled-components";

export const GeneralContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 75rem;
`;

export const CompleteOrderForm = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-areas:
    "iconarea cartarea"
    "typearea cartarea";
  gap: 2rem;
  margin-bottom: 5rem;

  .form {
    grid-area: iconarea;
  }

  .type {
    grid-area: typearea;
  }

  .cart {
    grid-area: cartarea;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-areas:
    "iconarea cartarea"
    "typearea cartarea";
  grid-template-columns: 2rem;
  grid-template-rows: 1.4rem;
  margin-bottom: 2rem;
  gap: 0.3rem;

  .form {
    grid-area: iconarea;
  }

  .type {
    grid-area: typearea;
  }

  .cart {
    grid-area: cartarea;
  }
`;
