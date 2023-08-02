import React from 'react';
import { FriendListSection, FriendListItem, FriendListStatus, FriendListAvatar, FriendListName } from './friendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem key={id}>
            <FriendListStatus isOnline={isOnline} />
            <FriendListAvatar src={avatar} alt="User avatar" width="48" />
            <FriendListName>{name}</FriendListName>
          </FriendListItem>
        ))}
      </ul>
    </FriendListSection>
  );
};

export default FriendList;
