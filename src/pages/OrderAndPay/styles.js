import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 3.4rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    /* Poppins/400-medium */
    font-family: "Poppins";
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    /* Poppins/200-medium */
    font-family: "Poppins";
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  }
`;

export const OrderItems = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 2.4rem 0;

  > div > div {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 1.6rem;
  }

  > img {
    width: 10rem;
    height: 10rem;

    margin-right: 2.4rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    /* Poppins/200-medium */
    font-family: "Poppins";
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Smallest regular */
    font-family: "Roboto";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
  }

  button {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.TOMATO_400};

    /* Roboto/Smallest regular */
    font-family: "Roboto";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
