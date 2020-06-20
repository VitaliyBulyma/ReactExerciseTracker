import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddExercise from './components/AddExercise';
import ListExercises from './components/ListExercise';
import ShowWorkouts from './components/ShowWorkouts';
import CreateWorkout from './components/CreateWorkout';
import Nav from './components/Nav';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />          
          <Switch>
            <Route path="/" exact component={Home} />                       
            <Route path="/exercises" exact component={AddExercise} />                         
            <Route path="/showworkouts" exact component={ShowWorkouts} />                    
            <Route path="/createworkout" exact component={CreateWorkout} />                    
          </Switch>       
      </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>Welcome to Reaction21</h1>
    <p>Exercise tracker to keep track of time spent exercising</p>
  </div>
)

export default App;
