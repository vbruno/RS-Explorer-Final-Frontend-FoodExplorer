import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.4rem 0.8rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;

    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; /* 171.429% */
  }
`;
