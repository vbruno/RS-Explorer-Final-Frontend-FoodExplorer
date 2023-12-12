import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  > label {
    color: var(--light-light-400, #c4c4cc);
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > textarea {
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;

    display: flex;
    max-width: 100%;
    padding: 1.4rem;
    align-items: flex-start;
    gap: 1.4rem;
    align-self: stretch;

    resize: vertical;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
