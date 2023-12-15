import styled from "styled-components";
import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  > a > header {
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

  > div {
    display: grid;
    grid-template-columns: 39rem 1fr;
    grid-gap: 4.7rem;
    grid-template-areas: "img info";

    img {
      grid-area: img;
      width: 100%;
    }

    > div {
      grid-area: info;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2.4rem;

      h1 {
        color: var(--light-light-300, #e1e1e6);

        /* Poppins/500-medium */
        font-family: Poppins;
        font-size: 4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 56px */
      }

      h2 {
        color: var(--light-light-300, #e1e1e6);

        /* Poppins/300-regular */
        font-family: Poppins;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 33.6px */
      }

      > div:nth-child(4) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3.3rem;
      }
    }
  }

  @media ${DEVICE_TYPE.MOBILE} {
    padding: 0 5.6rem;

    > header {
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
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;

        h1 {
          font-size: 2.7rem;
        }

        h2 {
          font-size: 1.6rem;
          text-align: center;
        }

        > div:nth-child(4) {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 2.6rem;

          > div {
            width: 25%;
          }

          > button {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;
