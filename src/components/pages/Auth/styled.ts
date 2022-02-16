import styled from "styled-components";
import {COLORS} from '../../common/styles/colors';

export const StForm = styled.form`
  display: flex;
  background-color: ${COLORS.WHITE_BG};
  padding: 1.5rem 2.5rem;
  flex-direction: column;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 0.8rem 1.5rem ${COLORS.SHADOW_BOX};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const StFormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
