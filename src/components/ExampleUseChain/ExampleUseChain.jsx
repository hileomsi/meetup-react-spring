import React, { useRef } from 'react';
import {
  CardContainer,
  CardContent,
  Title,
  Description,
  UserContainer,
  UserAvatar,
  UserContent,
  UserName,
  UserCareer
} from '../Card/styles';

import { useSpring, useChain } from 'react-spring';

export default function ExampleUseTrail(props) {
  const baseConfigSpring = {
    to: { opacity: 1, top: 0 },
    from: { opacity: 0, top: 32 }
  };

  const cardRef = useRef();
  const styles = useSpring({
    ...baseConfigSpring,
    ref: cardRef
  });

  const titleRef = useRef();
  const titleStyles = useSpring({
    ...baseConfigSpring,
    ref: titleRef
  });

  const descriptionRef = useRef();
  const descriptionStyles = useSpring({
    ...baseConfigSpring,
    ref: descriptionRef
  });

  const userRef = useRef();
  const userStyles = useSpring({
    ...baseConfigSpring,
    ref: userRef
  });

  useChain([cardRef, titleRef, descriptionRef, userRef], [0, 0.4, 0.8, 1.2]);

  return (
    <CardContainer style={styles} {...props}>
      <CardContent>
        <Title style={titleStyles}>{props.title}</Title>
        <Description style={descriptionStyles}>{props.description}</Description>
        <UserContainer style={userStyles}>
          <UserAvatar src={props.user.avatar} />
          <UserContent>
            <UserName>{props.user.name}</UserName>
            <UserCareer>{props.user.career}</UserCareer>
          </UserContent>
        </UserContainer>
      </CardContent>
    </CardContainer>
  );
}
