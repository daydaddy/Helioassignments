import React from 'react'

export default function Login() {

    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label for="email">Email</label>
                <input type="email" type="email"></input>
                <br></br>

                <label for="password">Password</label>
                <input type="password" type="password"></input>
                <br></br>

                <input type="submit" value="Login"></input>
                <br></br>

                <a href="./Home">Home Page</a>
            </form>
        </div>
    )
}