import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Home'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Registration from './Registration'

export default function MainRouter () {

    return (
        <Router>
            <Switch>
                <Route path="/ForgotPassword"><ForgotPassword></ForgotPassword></Route>
                <Route path="/Login"><Login></Login></Route>
                <Route path="/Registration"><Registration></Registration></Route>
                <Route path="/"><Home></Home></Route>
            </Switch>
        </Router>
    )
}