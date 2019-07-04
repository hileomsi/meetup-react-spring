import styled from 'styled-components';
import { animated } from 'react-spring';

export const List = styled.ul``;

export const ListItemContainer = styled(animated.li)`
  display: flex;
  align-items: center;
  position: relative;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0px 10px 20px -10px rgba(153, 153, 153, 0.5);
`;

export const UserAvatar = styled(animated.img)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const UserContent = styled(animated.div)`
  margin-left: 15px;
`;

export const UserName = styled(animated.div)`
  font-size: 16px;
  font-weight: bold;
  font-family: GilroyBold;
  letter-spacing: 1px;
`;

export const UserCareer = styled(animated.div)`
  font-size: 14px;
  letter-spacing: 1px;
  color: #aaaaaa;
  font-family: SourceSans;
`;
