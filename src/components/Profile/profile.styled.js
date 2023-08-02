import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  margin: 10px auto;
  width: 350px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 8px;
`;

export const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 6px -3px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 8px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #999;
  margin: 8px;
`;

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgb(126, 127, 191);
  padding: 24px;
`;

export const StatItem = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  flex: 1;
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
