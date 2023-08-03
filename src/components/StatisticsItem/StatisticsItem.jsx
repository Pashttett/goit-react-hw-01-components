// components/StatisticsItem/StatisticsItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { randColor } from '../helpers/randColor';
import { StatItem, Label, Percentage } from './statistics.styled';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem style={{ backgroundColor: randColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
