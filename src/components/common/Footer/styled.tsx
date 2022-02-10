import styled from "styled-components";
import {COLORS} from '../styles/colors';

export const StFooter = styled.div`
  background-color: ${COLORS.whiteBg};
  padding: 1.5rem 2.5rem;
  box-shadow: 1px 1px 7px 0 ${COLORS.shadowBox};
`;

export const StFooterWrapper = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const StFooterCopyright = styled.strong`
  color: ${COLORS.greyText};
`;
