import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileView from './Components/ProfileView';
import ProfileEdit from './Components/ProfileEdit';
import CompanySearch from './Components/CompanySearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileView />} />
        <Route path="/edit" element={<ProfileEdit />} />
        <Route path="/search" element={<CompanySearch />} />
      </Routes>
    </Router>
  );
}

export default App;
