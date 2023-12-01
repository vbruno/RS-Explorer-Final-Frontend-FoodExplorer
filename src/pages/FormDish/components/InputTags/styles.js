import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;

  gap: 1.6rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Small regular */
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > section {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1.6rem;

    height: 48px;
    padding: 4px 8px;
    align-self: stretch;

    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;
