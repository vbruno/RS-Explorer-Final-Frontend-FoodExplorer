import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.2rem 3.2rem;

  border-radius: 5px;
  border: none;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;

  /* Poppins/100-medium */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }
`;
