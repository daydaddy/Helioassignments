import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {LoggedInProvider} from "./LoggedInContext"
import Signup from "./Signup"
import ForgotPassword from "./ForgotPassword"
import Home from "./Home"
import Login from "./Login"

export default function MainRouter() { 

    return (
        <LoggedInProvider>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/forgotpassword">
                        <ForgotPassword></ForgotPassword>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </LoggedInProvider>
    )
}