import React from 'react';
import '../styles/MyLoans.css';
import { useResourceContext } from '../context/ResourceContext';

const MyLoans: React.FC = () => {
  const { resources, markAsReturned } = useResourceContext();
  const myLoans = resources.filter((r) => r.borrower === 'john@campus.edu' && r.status === 'Borrowed');

  return (
    <div className="my-loans">
      <h2>My Loans</h2>
      <div className="loan-list">
        {myLoans.map((loan) => (
          <div key={loan.id} className="loan-item">
            <h3><strong>{loan.name}</strong></h3>
            <p>{loan.description}</p>
            <p>Owner: {loan.owner}</p>
            <button onClick={() => markAsReturned(loan.id)}>Return</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLoans;
