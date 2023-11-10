import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1.4rem;

  button {
    width: 2.4rem;
    height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0;
  }

  span {
    width: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;

    /* Roboto/Big bold */
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 32px */
  }
`;
