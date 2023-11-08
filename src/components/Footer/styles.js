import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    /* Roboto/Bigger bold */
    font-family: "Roboto";
    font-size: 24px;
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
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
`;
