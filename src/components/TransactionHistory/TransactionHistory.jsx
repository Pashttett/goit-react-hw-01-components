import React from 'react';
import PropTypes from 'prop-types';
import { TransactionTable, TableHeader, TableRow, TableCell } from './transaction.styled';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem'; // Додайте імпорт для TransactionHistoryItem

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <TransactionHistoryItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
