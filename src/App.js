import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Modules from './Modules/Modules';
import StudyPlan from './StudyPlan/StudyPlan';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/modules" exact>
            <Modules/>
          </Route>

          <Route path="/studyplan" exact>
            <StudyPlan/>
          </Route>

          <Redirect to="/"/>

        </Switch>
      </main> 
    </Router>
  );
}

export default App;
