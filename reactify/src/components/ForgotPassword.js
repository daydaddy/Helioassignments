import React from 'react'

export default function ForgotPassword() {

    return (
        <div>
            <h1>Forgot Password Page</h1>
            <form>
                <label for="email">Email</label>
                <input type="email" type="email"></input>
                <br></br>

                <label for="password">Password</label>
                <input type="password" type="email"></input>
                <br></br>

                <input type="submit" value=" Fogot Password"></input>
                <br></br>

                <a href="./Home">Home Page</a>
            </form>
        </div>
    )
}