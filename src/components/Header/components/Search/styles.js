import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 1.4rem;
  gap: 1.4rem;

  border: none;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  input {
    flex: 1 0 0;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Small regular */
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
