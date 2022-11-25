import styled from "styled-components";

export const GeneralContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 75rem;
`;

export const OrderConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
`;

export const ConfirmHeaderTitle = styled.h1`
  color: var(--yellow-dark);
  margin-bottom: 1rem;
  font-size: 3rem;
  font-family: "Baloo 2";
  line-height: 130%;
  font-weight: 800;
`;

export const ConfirmHeaderSubtitle = styled.h3`
  color: var(--base-text);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 400;
`;

export const OrderInfoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.5rem 2.5rem 0.5rem 2.5rem;
  border: --border-width;
  background: var(--background);
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  --border-radius: 0.5rem 2.5rem 0.5rem 2.5rem;
  --border-width: 3px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1.1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      #c47f17,
      #dbac2c,
      #4b2995,
      #c47f17,
      #8047f8
    );
    --yellow-dark: #c47f17;
    --purple-light: #ebe5f9;
    --yellow-light: #f1e9c9;
    --purple-dark: #4b2995;
    --normal-yellow: #dbac2c;
    --normal-purple: #8047f8;

    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 0.5rem 2.5rem 0.5rem 2.5rem;
    animation: moveGradient 4s alternate infinite;
  }

  @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  div.orange {
    background: var(--yellow-dark);
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
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--base-text);
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }
`;
