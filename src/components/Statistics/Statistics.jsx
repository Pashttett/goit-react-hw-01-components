import React from 'react';
import { StatisticsSection, StatList, StatItem, Label, Percentage } from './statistics.styled';

const randColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
};

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: randColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;
