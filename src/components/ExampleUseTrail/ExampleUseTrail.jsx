import React from 'react';
import { List, ListItemContainer, UserAvatar, UserContent, UserName, UserCareer } from './styles';
import { useTrail, config } from 'react-spring';

function ListItem(props) {
  return (
    <ListItemContainer {...props}>
      <UserAvatar src="https://avatars0.githubusercontent.com/u/12954134?s=460&v=4" />
      <UserContent>
        <UserName>Hiléo Andersson</UserName>
        <UserCareer>Software Engineer</UserCareer>
      </UserContent>
    </ListItemContainer>
  );
}

export default function ExampleUseChain() {
  const data = [{}, {}, {}, {}];
  const users = useTrail(data.length, {
    to: { opacity: 1, top: 0 },
    from: { opacity: 0, top: 32 },
    config: config.wobbly
  });

  return (
    <List>
      {users.map(styles => (
        <ListItem style={styles} />
      ))}
    </List>
  );
}
