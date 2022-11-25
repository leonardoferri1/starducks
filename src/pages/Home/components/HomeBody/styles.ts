import styled from "styled-components";

export const HomeBodyContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeCatalog = styled.div`
  width: 100%;
  display: grid;
  margin-top: 3.7rem;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.3rem;
`;

export const HomeBodyTitle = styled.h2`
  color: var(--base-subtitle);
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: "Baloo 2";
  line-height: 130%;
  font-weight: 800;
`;
