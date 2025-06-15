import React from 'react';
import { ResourceProvider } from './context/ResourceContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResourceForm from './components/ResourceForm';
import MyLoans from './components/MyLoans';
import ResourceList from './components/ResourceList';
import Header from './components/Header';
import './App.css'
import WelcomePage from './components/WelcomePage';

const App: React.FC = () => {
  return (
    <ResourceProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/donate" element={<ResourceForm />} />
          <Route path="/available" element={<ResourceList />} />
          <Route path="/loans" element={<MyLoans />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    </ResourceProvider>
  );
};

export default App;