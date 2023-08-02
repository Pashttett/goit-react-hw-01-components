import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 60%;
  margin: 0 auto;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
color: #fff;
  padding: 10px;
  background-color: rgb(126, 127, 191);
  border: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;
