import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: -7rem;

    gap: 1.9rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      /* Roboto/Giant bold */
      font-family: "Roboto";
      font-size: 4.2rem;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin-top: 0;

      gap: 1.6rem;

      svg {
        width: 5rem;
        height: 5rem;
      }
    }
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
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
      display: none;
    }

    button {
      /* Poppins/100-medium */
      font-family: Poppins;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
    }
  }
`;
