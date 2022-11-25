import styled from "styled-components";
import { transparentize } from "polished";

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 42rem;
`;

export const PaymentMethodCardBase = styled.div`
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
  margin-top: 0.2rem;
  color: var(--purple-dark);
`;

export const MethodSelectContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "purple";
}

const colors = {
  purple: "#EBE5F9",
  grey: "#EDEDED",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  gap: 0.3rem;
  padding: 0.1rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, "purple")
      : transparentize(0.9, "grey")};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  span {
    color: var(--base-text);
    font-size: 1rem;
    margin-right: 0.4rem;
  }

  &:hover {
    border-color: var(--normal-purple);
  }
`;
