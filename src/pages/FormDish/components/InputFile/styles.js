import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;

  gap: 1.6rem;

  > header {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Small regular */
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > main {
    width: 100%;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: none;

    background: ${({ theme }) => theme.COLORS.DARK_800};

    > label {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;

      padding: 1.2rem 3.2rem;
      gap: 2rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: left;

      /* Poppins/100-medium */
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
    }

    input {
      display: none;
    }
  }
`;
