import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Column-1/Column-1';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import "./App.css";
import Column1 from './components/Column-1/Column-1';
import Column2 from './components/Column-2/Column-2';
import Column3 from './components/Column-3/Column-3';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Header />
          <div className='sub-content'>
          <Column1/>
          <Column2/>
          <Column3/>
          </div>
          <Routes>
            <Route exact path="/" component={Dashboard} />
            {/* Add more routes for other pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
