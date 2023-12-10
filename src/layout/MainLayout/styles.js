import styled from "styled-components";

import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 0 12.3rem;

  overflow-y: auto;

  @media ${DEVICE_TYPE.MOBILE} {
    padding: 0 1.6rem;
  }
`;
