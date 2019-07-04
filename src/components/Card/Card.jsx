import React from 'react';
import PropTypes from 'prop-types';

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
} from './styles';

export default function Card({ user, title, description, onClick, ...props }) {
  return (
    <CardContainer onClick={onClick} {...props}>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <UserContainer>
          <UserAvatar src={user.avatar} />
          <UserContent>
            <UserName>{user.name}</UserName>
            <UserCareer>{user.career}</UserCareer>
          </UserContent>
        </UserContainer>
      </CardContent>
    </CardContainer>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
