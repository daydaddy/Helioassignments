import React from 'react'
import { Link } from 'react-router-dom'
import { LoggedInConsumer, LoggedInContext } from "./LoggedInContext"

export default function Home(props) {

    let {users, loggedIn} = React.useContext(LoggedInContext)

    const isLoggedIn = () => {

        if (loggedIn) {
            return (<h3>Logged In</h3>)
        } else {
            return (<h3>Not Logged In</h3>)
        }

    }

    return (
        <div>
            {
                users.map(user => {
                    return <li key={user.username}>{user.username}</li>
                })
            }
            <h1>Welcome to the Home Page</h1>
            {isLoggedIn()} 
            

            <br></br>
            <Link to="/Login">Login</Link>
            <br></br>
            <Link to="/Signup">Sign Up</Link>
            <br></br>
            <Link to="/ForgotPassword">Forgot Password</Link>

        </div>
    )
}