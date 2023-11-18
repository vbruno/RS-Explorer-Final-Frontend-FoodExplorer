import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 12.3rem;

  overflow-y: auto;
`;

export const ContentHeader = styled.header`
  width: 100%;
  height: 260px;

  margin-top: 16.4rem;

  border-radius: 8px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image text";
    gap: 2rem;

    > img {
      grid-area: image;
      margin-top: -140px;
      margin-left: -65px;
      background: transparent;
      border: none;
    }

    > div {
      grid-area: text;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      /* Poppins/500-medium */
      font-family: "Poppins";
      font-size: 4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 56px */
    }

    p {
      margin-top: 8px;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      /* Roboto/Small regular */
      font-family: "Roboto";
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }
  }
`;

export const ContentBody = styled.div`
  > div {
    margin-left: 20px;
  }
`;
