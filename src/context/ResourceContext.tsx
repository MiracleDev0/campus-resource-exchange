import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Resource = {
  id: number;
  name: string;
  description: string;
  owner: string;
  status: 'Available' | 'Pending' | 'Borrowed';
  borrower: string | null;
};

type ResourceContextType = {
  resources: Resource[];
  requests: Resource[];
  addResource: (resource: Omit<Resource, 'id' | 'status' | 'borrower'>) => void;
  requestItem: (id: number, borrower: string) => void;
  approveRequest: (id: number) => void;
  markAsReturned: (id: number) => void;
};

const ResourceContext = createContext<ResourceContextType | undefined>(undefined);

const initialData: Resource[] = [
  {
    id: 1,
    name: 'Physics Textbook',
    description: '3rd edition, like new',
    owner: 'jane@campus.edu',
    status: 'Available',
    borrower: null,
  },
  {
    id: 2,
    name: 'Engineering Textbook',
    description: '2nd edition, some highlights',
    owner: 'jane@campus.edu',
    status: 'Available',
    borrower: null,
  }
];

export const ResourceProvider = ({ children }: { children: ReactNode }) => {
  const [resources, setResources] = useState<Resource[]>(initialData);

  const addResource = (resource: Omit<Resource, 'id' | 'status' | 'borrower'>) => {
    setResources((prev) => [
      ...prev,
      { ...resource, id: Date.now(), status: 'Available', borrower: null, owner: 'jane@campus.edu' },
    ]);
  };

  const requestItem = (id: number, borrower: string) => {
    setResources((prev) =>
      prev.map((item) =>
        item.id === id && item.status === 'Available'
          ? { ...item, status: 'Pending', borrower }
          : item
      )
    );
  };

  const approveRequest = (id: number) => {
    setResources((prev) =>
      prev.map((item) =>
        item.id === id && item.status === 'Pending'
          ? { ...item, status: 'Borrowed' }
          : item
      )
    );
  };

  const markAsReturned = (id: number) => {
    setResources((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: 'Available', borrower: null } : item
      )
    );
  };

  return (
    <ResourceContext.Provider
      value={{
        resources,
        requests: resources.filter((r) => r.status === 'Pending'),
        addResource,
        requestItem,
        approveRequest,
        markAsReturned,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export const useResourceContext = () => {
  const context = useContext(ResourceContext);
  if (!context) throw new Error('useResourceContext must be used within ResourceProvider');
  return context;
};