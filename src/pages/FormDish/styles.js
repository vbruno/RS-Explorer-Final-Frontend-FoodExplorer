import styled from "styled-components";
import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  a > header {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 2.4rem;
    margin-bottom: 4rem;

    svg {
      width: 4rem;
      height: 2.4rem;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      /* Poppins/300-bold */
      font-family: "Poppins";
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 33.6px */
    }
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  @media ${DEVICE_TYPE.MOBILE} {
    a > header {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-top: 2.4rem;
      margin-bottom: 2rem;

      svg {
        width: 3rem;
        height: 2rem;

        path {
          fill: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }

      h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        /* Poppins/300-bold */
        font-family: "Poppins";
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 33.6px */
      }
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: fit-content fit-content fit-content 1fr;
  grid-template-areas:
    "file name name name select"
    "tags tags tags tags price"
    "description description description description description"
    "empty empty empty button1 button2";

  gap: 3.2rem;

  > div:nth-child(1) {
    grid-area: file;
  }

  > div:nth-child(2) {
    grid-area: name;
  }

  > div:nth-child(3) {
    grid-area: select;
  }

  > div:nth-child(4) {
    grid-area: tags;
  }

  > div:nth-child(5) {
    grid-area: price;
  }

  > div:nth-child(6) {
    grid-area: description;
  }

  > button:nth-child(7) {
    grid-area: button1;
  }

  > button:last-child {
    grid-area: button2;
  }

  @media ${DEVICE_TYPE.MOBILE} {
    display: flex;
    flex-direction: column;
  }
`;
