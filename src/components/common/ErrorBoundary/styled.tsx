import styled from "styled-components";
import {COLORS} from '../styles/colors';

export const StMain = styled.div`
  background-image: ${COLORS.PURPLE_BG};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const StContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StBody = styled.div`
  padding: 2.5rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.WHITE_BG};
  max-width: 35rem;
  box-shadow: 0 0.8rem 1.5rem ${COLORS.SHADOW_BOX};
  text-align: center;
`;

export const StTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const StTitle = styled.h1`
  font-size: 2.3rem;
`;

export const StIcon = styled.i`
  font-size: 2rem;
  margin-left: 1rem;
  position: relative;
  top: 0.1rem;
`;

export const StText = styled.p`
  text-align: left;
  margin-bottom: 2.5rem;
`;

export const StLink = styled.a`
  color: ${COLORS.ORANGE_TEXT};
`;

