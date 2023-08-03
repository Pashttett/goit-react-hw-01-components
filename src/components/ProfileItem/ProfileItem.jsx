// components/ProfileItem/ProfileItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ProfileItem = ({ label, value }) => {
  return (
    <div>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

ProfileItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProfileItem;
