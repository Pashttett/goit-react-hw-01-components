// components/Profile.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionContainer,
  AvatarImage,
  Name,
  Tag,
  Location,
  StatsList,
  StatItem,
  Label,
  Quantity,
} from './profile.styled';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User Avatar" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionContainer>
      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
