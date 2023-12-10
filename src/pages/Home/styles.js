import styled from "styled-components";

import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

export const ContentHeader = styled.header`
  width: 100%;
  height: 260px;

  margin-top: 16.4rem;

  margin-bottom: 6.2rem;

  border-radius: 0.8rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image text";
    gap: 2rem;

    > img {
      grid-area: image;
      margin-top: -14rem;
      margin-left: -6.5rem;
      background: transparent;
      border: none;
    }

    > div {
      grid-area: text;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      /* Poppins/500-medium */
      font-family: "Poppins";
      font-size: 4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 56px */
    }

    p {
      margin-top: 8px;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      /* Roboto/Small regular */
      font-family: "Roboto";
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }
  }

  @media ${DEVICE_TYPE.MOBILE} {
    height: 12rem;

    margin-top: 4.4rem;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > img {
        width: 19.1rem;
        height: 14.9rem;

        margin-top: -2.2rem;
        margin-left: 0;

        background: transparent;
        border: none;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        /* Poppins/500-medium */
        font-family: "Poppins";
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 56px */
      }

      p {
        margin-top: 8px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        /* Roboto/Small regular */
        font-family: "Roboto";
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
      }
    }
  }
`;
