import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;

  gap: 0.8rem;

  > label {
    align-self: stretch;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Small regular */
    font-family: "Roboto";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > input {
    display: flex;
    width: 34.8rem;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;

    border-radius: 5px;
    border: none;
    background: ${({ theme }) => theme.COLORS.DARK_900};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    /* Roboto/Small regular */
    font-family: "Roboto";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
