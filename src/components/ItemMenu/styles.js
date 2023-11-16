import styled from "styled-components";

export const Container = styled.div`
  /* width: 112rem; */
  width: 100%;
  height: 53rem;

  position: relative;

  margin-top: 6.2rem;

  > div > h1 {
    margin-bottom: 2.3rem;

    color: var(--light-light-300, #e1e1e6);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }
`;
