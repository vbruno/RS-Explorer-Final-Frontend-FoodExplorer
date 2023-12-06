import styled from "styled-components";

export const Container = styled.div`
  width: 30.4rem;
  height: 46.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.4rem;
  gap: 1.5rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  > img {
    width: 17.6rem;
    height: 17.6rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;

    /* Poppins/300-bold */
    font-family: "Poppins";
    font-size: 24px;
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
    font-size: 14px;
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
    font-size: 32px;
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
      width: 9.2rem;
      height: 4.8rem;
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
`;
