import React, { useState } from 'react';
import '../styles/ResourceForm.css';
import { useResourceContext } from '../context/ResourceContext';

const ResourceForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');
  const { addResource } = useResourceContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addResource({ name, description, owner });
    setName('');
    setDescription('');
    setOwner('');
  };

  return (
    <>
    
    <form className="resource-form" onSubmit={handleSubmit}>
      <h2>Post a Resource</h2>
      <p>Share your resources with the community!</p>
      <input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br />
      <input placeholder="Owner Email" type='email' value={owner} onChange={(e) => setOwner(e.target.value)} required /><br />
      <button type="submit">Post Resource</button>
    </form>
    </>
  );
};

export default ResourceForm;
