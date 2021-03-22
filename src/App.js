import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Homepage from "./Components/Homepage/Homepage";
import Homepage2 from "./Components/Homepage2/Homepage2";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
       <Homepage></Homepage>
       <Homepage2></Homepage2>
        
        

      </Route>

      </Switch>
    </Router>
  );
}

export default App;
