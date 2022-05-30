import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Modules from './Modules/Modules';
import StudyPlan from './StudyPlan/StudyPlan';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/modules" element = {<Modules/>}/>
          <Route exact path = "/studyplan" element = {<StudyPlan/>}/>
        </Routes>
      </main> 
    </Router>
  );
}

export default App;