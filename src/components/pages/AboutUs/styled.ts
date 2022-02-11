import styled from "styled-components";
import {COLORS} from '../../common/styles/colors';

export const StWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StTitle = styled.p`
  margin: 100px auto;
  text-align: center;
  font-size: 60px;
  color: ${COLORS.whiteBg};
`;
export const StP = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: 25px;
  color: ${COLORS.whiteBg};
  max-width: 1200px;
  width: 100%;
`;
