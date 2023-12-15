import styled from "styled-components";

import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";
import { FONTS_TYPE } from "../../styles/font";

export const Container = styled.div`
  max-width: 30.4rem;
  max-height: 46.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.4rem;
  gap: 1.5rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  > button > img {
    max-width: 17.6rem;
    max-height: 17.6rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;

    /* Poppins/300-bold */
    font-family: "Poppins";
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    white-space: nowrap;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;

    /* Roboto/Smaller regular */
    font-family: "Roboto";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    white-space: wrap;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: center;

    /* Roboto/Biggest regular */
    font-family: Roboto;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 51.2px */
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;

    > button {
      max-width: 9.2rem;
      max-height: 4.8rem;
    }
  }

  > button {
    > svg {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
    }

    background: transparent;
    border: none;
  }

  @media ${DEVICE_TYPE.MOBILE} {
    > img {
      max-width: 8.8rem;
      max-height: 8.8rem;
    }

    > h1 {
      text-align: center;

      ${FONTS_TYPE["POPPINS/100-MEDIUM"]}
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      text-align: center;

      ${FONTS_TYPE["ROBOTO/SMALL-REGULAR"]}
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;

      > button {
        width: 9.2rem;
        max-height: 3.2rem;
      }
    }

    > button {
      > svg {
        width: 2.4rem;
        height: 2.4rem;

        top: 1.6rem;
        right: 1.6rem;
      }
    }
  }
`;
