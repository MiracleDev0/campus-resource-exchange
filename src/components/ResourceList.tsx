import React from 'react';
import { useResourceContext } from '../context/ResourceContext';
import ResourceCard from './ResourceCard';

const ResourceList: React.FC = () => {
  const { resources } = useResourceContext();

  return (
    <div className="resource-list">
      <h2>Available Resources</h2>
      <div className='resource-list-container'>
        {resources.map((res) => (
          <ResourceCard key={res.id} resource={res} />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;