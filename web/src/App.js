 
// import Chat from "./Chat";
import React from "react";
import SignUpForm from './SignUpForm/SignUp';
import { HashRouter as Router, Route } from 'react-router-dom'
import SingInForm from './SignInForm/SignIn';


function App() {
  return (
   
    <Router >
    <div>
    
     
            <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SingInForm}>
              </Route>
    
    </div>
    </Router>
  );
}

export default App;