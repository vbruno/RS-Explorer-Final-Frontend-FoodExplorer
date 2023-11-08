import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > h1 {
    width: 18.6rem;

    display: flex;
    align-items: center;
    gap: 10px;

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

  button {
    max-width: 21.6rem;
  }

  button:last-child {
    width: fit-content;
    background: transparent;
    border: none;
  }
`;
