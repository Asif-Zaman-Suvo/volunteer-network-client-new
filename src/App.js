import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Homepage from "./Components/Homepage/Homepage";
import Homepage2 from "./Components/Homepage2/Homepage2";
import PrivateRoute from "./Components/LoginPage/privateRoute";
import Register from "./Components/RegisterPage/Register";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/LoginPage/Login";

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

          <Route path="/login">
            <Login></Login>

          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
