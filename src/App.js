import React, { createContext, useState } from "react";
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
import PrivateRoute from "./Components/LogIn/privateRoute";
import Register from "./Components/RegisterPage/Register";
import Admin from "./Components/Admin/Admin";


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
      <Route exact path="/">
       <Homepage></Homepage>
       <Homepage2></Homepage2>       
      </Route>

      <PrivateRoute path="/register">
        <Register></Register>
       
      </PrivateRoute>

      <PrivateRoute path="/adminPanel">
        
       <Admin></Admin>
      </PrivateRoute>

     
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
