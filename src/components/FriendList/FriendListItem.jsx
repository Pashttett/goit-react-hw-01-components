import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItemWrapper, Status, Avatar, Name } from './friendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemWrapper className="item">
      <Status isOnline={isOnline} className="status"></Status>
      <Avatar src={avatar} alt="User avatar" width="48" className="avatar" />
      <Name>{name}</Name>
    </FriendListItemWrapper>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
