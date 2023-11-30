import styled from "styled-components";

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

  button:first-child {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;

    background: transparent;
    border: none;

    > div {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }

  h1 {
    /* width: 18.6rem; */

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    /* Roboto/Bigger bold */
    font-family: Roboto;
    font-size: 24px;
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

    margin-top: -1rem;

    color: var(--tints-cake-200, #82f3ff);

    /* Roboto/Smallest regular */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
  }

  button {
    max-width: 21.6rem;
  }

  button:last-child {
    width: fit-content;
    background: transparent;
    border: none;
  }
`;
