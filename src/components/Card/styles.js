import styled from 'styled-components';
import { animated } from 'react-spring';

export const CardContainer = styled(animated.div)`
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  box-shadow: 0px 10px 20px -10px rgba(153, 153, 153, 0.5);
`;

export const CardContent = styled(animated.div)``;

export const Title = styled(animated.div)`
  font-weight: bold;
  font-size: 28px;
  line-height: 1.3;
  margin-bottom: 15px;
  font-family: GilroyBold;
  position: relative;
`;

export const Description = styled(animated.div)`
  font-size: 18px;
  line-height: 1.5;
  color: #bbb;
  margin-bottom: 90px;
  font-family: SourceSans;
  position: relative;
`;

export const UserContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  position: relative;
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
