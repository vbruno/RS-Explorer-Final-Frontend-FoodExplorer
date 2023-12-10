import styled from "styled-components";

import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > h1 {
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    /* Roboto/Bigger bold */
    font-family: "Roboto";
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    svg {
      width: 3rem;
      height: 3rem;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    /* Roboto/Smaller regular */
    font-family: "Roboto";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }

  @media ${DEVICE_TYPE.MOBILE} {
    padding: 2.4rem;

    display: flex;
    align-items: center;

    > h1 {
      display: flex;
      align-items: center;

      /* Roboto/Bigger bold */
      font-family: "Roboto";
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      svg {
        width: 2.4rem;
        height: 2.4rem;

        path {
          fill: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
      }
    }
  }
`;
