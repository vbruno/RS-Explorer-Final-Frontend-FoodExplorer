import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  background: transparent;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;

  /* Poppins/100-medium */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
`;
