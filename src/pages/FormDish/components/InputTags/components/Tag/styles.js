import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 32px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  text-transform: capitalize;

  span {
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    text-align: center;

    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */

    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;

    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }

    svg {
      width: 8px;
      height: 8px;

      &:hover {
        path {
          fill: ${({ theme, $isNew }) =>
            $isNew ? theme.COLORS.MINT_100 : theme.COLORS.TOMATO_400};
        }
      }
    }
  }
`;
