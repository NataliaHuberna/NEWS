import styled from "styled-components";
import {COLORS} from '../../common/styles/colors';

export const StWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  width: 1200px;
  justify-content: center;
  margin: 0 auto;
  .MuiPaper-root{
    display: flex;
    flex-direction: column;
    box-shadow: 0 0.8rem 1.5rem ${COLORS.shadowBox};
    .MuiCardActions-root{
      margin-top: auto;
    }
  }
`;

export const StFakeImage = styled.div`
  background: gray;
  height: 140px;
  display: grid; 
  place-items: center;
  color: white;
`;
