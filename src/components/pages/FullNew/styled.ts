import styled from "styled-components";
import {COLORS} from '../../common/styles/colors';

export const StPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  color: ${COLORS.WHITE_BG};
  font-size: 20px;
  margin: 50px auto;
  min-height: calc(100vh - 260px);
  justify-content: space-between;
  gap: 20px;
`;

export const StMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StPictureWrapper = styled.div`
  width: 500px;
  height: 350px;
  box-shadow: 0 0.8rem 1.5rem ${COLORS.SHADOW_BOX};
`;

export const StPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  border-radius: 10px;
`;

export const StTitleWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const StAuthor = styled.p`
  text-align: center;
  font-size: 25px;
  font-style: italic;
`;

export const StTitle = styled.p`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`;

export const StDiscribe = styled.p`
  text-align: center;
`;

export const StContent = styled.p`
  text-align: justify;
`;

export const StFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-end;
  font-style: italic;
  font-size: 25px;
`;
