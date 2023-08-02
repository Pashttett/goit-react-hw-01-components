import styled from 'styled-components';

export const FriendListSection = styled.section`
  padding: 20px;
  margin: 10px auto;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 12px -5px rgba(0, 0, 0, 0.75);
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const FriendListStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const FriendListAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendListName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;
