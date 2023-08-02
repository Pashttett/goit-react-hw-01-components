import styled from 'styled-components';

export const StatisticsSection = styled.section`
overflow: hidden;  
margin: 10px auto;
width: 500px;
background-color: white;
border-radius: 20px;
box-shadow: 1px 1px 12px -5px rgba(0, 0, 0, 0.75);
text-align: center;
`;

export const StatisticsTitle = styled.h2`
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
`;

export const StatList = styled.ul`
display: flex;
list-style: none;
margin-bottom: 0;
padding: 0;   
`;

  export const StatItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;  
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.span`
  flex: 1;
  color:white;
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
