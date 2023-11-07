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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > input {
    display: flex;
    width: 348px;
    height: 48px;
    padding: 12px 14px;
    justify-content: center;
    align-items: center;
    gap: 14px;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

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
