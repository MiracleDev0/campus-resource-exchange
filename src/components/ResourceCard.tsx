import React from 'react';
import '../styles/ResourceCard.css';
import type { Resource } from '../context/ResourceContext';
import { useResourceContext } from '../context/ResourceContext';

type Props = {
  resource: Resource;
};

const ResourceCard: React.FC<Props> = ({ resource }) => {
  const { requestItem, approveRequest } = useResourceContext();
  const isAvailable = resource.status === 'Available';
  const isPending = resource.status === 'Pending';
  const currentUser = 'jane@campus.edu';

  return (
    <div className="resource-card">
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <p>Owner: {resource.owner}</p>
      <span className={`status ${resource.status}`}>{resource.status}</span> <br /><br />

      {isAvailable && (
        <button onClick={() => requestItem(resource.id, 'john@campus.edu')}>
          Request
        </button>
      )}

      {isPending && resource.owner === currentUser && (
        <button onClick={() => approveRequest(resource.id)}>Approve Request</button>
      )}
    </div>
  );
};

export default ResourceCard;