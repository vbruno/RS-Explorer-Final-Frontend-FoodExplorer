import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 2.4rem;
    margin-bottom: 4rem;

    svg {
      width: 40px;
      height: 24px;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      /* Poppins/300-bold */
      font-family: "Poppins";
      font-size: 24px;
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
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 56px */
      }

      h2 {
        color: var(--light-light-300, #e1e1e6);

        /* Poppins/300-regular */
        font-family: Poppins;
        font-size: 24px;
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
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
`;
