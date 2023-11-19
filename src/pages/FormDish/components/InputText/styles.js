import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;

  gap: 1.6rem;

  > label {
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
    width: 100%;
    /* width: 348px; */
    height: 48px;
    padding: 12px 14px;
    justify-content: center;
    align-items: center;
    gap: 14px;

    border-radius: 8px;
    border: none;
    background: ${({ theme }) => theme.COLORS.DARK_800};

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
