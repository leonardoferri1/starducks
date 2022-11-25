import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button.yellow {
    color: var(--yellow-dark);
    background: var(--yellow-light);
  }

  button.purple {
    color: var(--normal-purple);
    background: var(--purple-light);
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  padding: 0 0.65rem;
  position: relative;
  font-size: 0.875rem;
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin-bottom: 2.2rem;
    margin-left: 2.2rem;
    background: var(--yellow-dark);
    color: var(--white);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;
