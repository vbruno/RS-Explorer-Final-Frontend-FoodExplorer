import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;

    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;
