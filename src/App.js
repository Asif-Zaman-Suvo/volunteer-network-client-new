import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MenuBar from "./Components/MenuBar/MenuBar";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <MenuBar></MenuBar>
        
        

      </Route>

      </Switch>
    </Router>
  );
}

export default App;
