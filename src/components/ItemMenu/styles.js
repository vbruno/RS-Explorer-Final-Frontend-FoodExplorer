import styled from "styled-components";

import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";
import { FONTS_TYPE } from "../../styles/font";

export const Container = styled.div`
  /* width: 112rem; */
  width: 100%;
  /* height: 53rem; */

  margin-bottom: 2.4rem;

  position: relative;

  > div > h1 {
    margin-bottom: 2.3rem;

    color: var(--light-light-300, #e1e1e6);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${FONTS_TYPE["POPPINS/400-MEDIUM"]}
  }

  @media ${DEVICE_TYPE.MOBILE} {
    > div > h1 {
      font-size: 1.8rem;
    }
  }
`;
