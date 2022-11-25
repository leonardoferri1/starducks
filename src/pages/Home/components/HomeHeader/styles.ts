import styled from "styled-components";
import Background from "../../../../assets/Background.png";

export const HomeHeaderContainer = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Background});
`;

export const HomeHeaderContent = styled.div`
  width: 100%;
  gap: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeHeaderTitle = styled.h1`
  color: var(--base-title);
  margin-bottom: 1rem;
  font-size: 3rem;
  font-family: "Baloo 2";
  line-height: 130%;
  font-weight: 800;
`;

export const HomeHeaderSubtitle = styled.h3`
  color: var(--base-text);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 400;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  div.orange {
    background: var(--yellow-dark);
  }

  div.grey {
    background: var(--base-text);
  }

  div.yellow {
    background: var(--normal-yellow);
  }

  div.purple {
    background: var(--normal-purple);
  }
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
`;
