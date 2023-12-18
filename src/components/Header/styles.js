import styled from "styled-components";
import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

import { Button } from "../Button";

export const Container = styled.header`
  width: 100%;

  padding: 2.4rem 12.3rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.2rem;
  }

  @media ${DEVICE_TYPE.MOBILE} {
    padding: 5.6rem 2.8rem 2.4rem;
  }
`;

export const ButtonLogo = styled.button`
  width: 100%;

  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;

  svg {
    width: 3rem;
    height: 3rem;
  }

  > div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;

    h1 {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      /* Roboto/Bigger bold */
      font-family: Roboto;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      white-space: nowrap;

      svg {
        width: 3rem;
        height: 3rem;
      }
    }

    p {
      display: ${({ $isAdmin }) => ($isAdmin ? "flex" : "none")};

      margin-top: -0.25rem;

      color: var(--tints-cake-200, #82f3ff);

      /* Roboto/Smallest regular */
      font-family: Roboto;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
    }
  }

  @media ${DEVICE_TYPE.MOBILE} {
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 1rem;
      h1 {
        /* width: 18.6rem; */

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: Roboto;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p {
        margin-top: 0;

        /* Roboto/Smallest regular */
        font-family: Roboto;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
      }
    }
  }
`;

export const ButtonMenu = styled.button`
  width: fit-content;
  background: transparent;
  border: none;
`;

export const ButtonOrder = styled(Button)`
  max-width: 20rem;

  @media ${DEVICE_TYPE.MOBILE} {
    padding: 0;
    width: fit-content;
    background: transparent;
    border: none;

    &:hover {
      background: transparent;
    }

    &:disabled {
      background: transparent;
      cursor: not-allowed;
    }
  }
`;

export const ButtonLogout = styled.button`
  width: fit-content;
  background: transparent;
  border: none;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 94vh;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_400};

  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  > header {
    width: 100%;
    height: 11.4rem;

    padding: 4.6rem 2.8rem 2.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    > button {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.6rem;

      padding: 1rem;

      background: transparent;
      border: none;

      > svg {
        width: 1.8rem;
        height: 1.8rem;
      }

      > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: Roboto;
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  > main {
    height: 100%;
    width: 100%;

    padding: 0 2.8rem;

    > button {
      width: 100%;
      height: 6.4rem;

      margin-top: 3.6rem;

      padding: 1rem;

      background: transparent;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      display: flex;
      align-items: center;
      justify-content: start;

      > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: "Poppins";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 300;
        line-height: 140%; /* 33.6px */
      }
    }
  }
`;
