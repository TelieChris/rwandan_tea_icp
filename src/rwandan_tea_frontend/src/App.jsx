import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CreateTeaBatch from './components/CreateTeaBatch';
import AssignDistributor from './components/AssignDistributor';
import TeaBatchList from './components/TeaBatchList';
import RegisterStakeholder from './components/RegisterStakeholder';
import StakeholdersList from './components/StakeholdersList';
import AssignRetailer from './components/AssignRetailers';
import Login from './components/Login';
import Registration from './registration/registration';
import Dashboard from './components/Dashboard';

const App = () => {
  const [stakeholder, setStakeholder] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setStakeholder={setStakeholder} />} />
        <Route path='/home' element={<Home/>} />
        <Route path="/create" element={<CreateTeaBatch />} />
        <Route path="/assign-distributor" element={<AssignDistributor />} />
        <Route path="/list" element={<TeaBatchList />} />
        <Route path='/register_stakeholder' element={<Registration />} />
        <Route path='/stakeholders' element={<StakeholdersList />} />
        <Route path="/assign-retailers" element={<AssignRetailer />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/dashboard" element={<Dashboard stakeholder={stakeholder} />} />

      </Routes>
    </Router>

  );
};

export default App;