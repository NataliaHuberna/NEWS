import styled from "styled-components";
import {COLORS} from '../styles/colors';

export const StLayout = styled.div`
  min-height: 100vh;
  & > div{
    position: relative;
  }
  &>div:nth-child(1){
    height: 80px;
    box-shadow: 1px 1px 7px 0 ${COLORS.shadowBox};
    z-index: 1;
  }
  &>div:nth-child(2){
    height: calc(100vh - 160px);
    overflow-y: auto;
  }
  &>div:nth-child(3){
    height: 80px;
  }
`;

export const StContent = styled.div`
  background-image: ${COLORS.purpleBg};
`;


