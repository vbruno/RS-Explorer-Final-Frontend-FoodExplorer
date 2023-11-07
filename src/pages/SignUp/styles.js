import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 1.9rem;

    margin-top: -7rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      /* Roboto/Giant bold */
      font-family: "Roboto";
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 47.6rem;
  border-radius: 1.6rem;

  padding: 6.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  gap: 3.2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;

    /* Poppins/400-medium */
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }
`;
