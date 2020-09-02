import React from 'react'

export default function Registration() {

    return (
        <div>
            <h1>Registration Page</h1>
            <form>
                <label for="frame">First Name</label>
                <input id="frame" type="text"></input>
                <br></br>

                <label for="lname">Last Name</label>
                <input id="lname" type="text"></input>
                <br></br>

                <label for="email">Email</label>
                <input type="email" type="email"></input>
                <br></br>

                <label for="phone">Phone</label>
                <input type="phone" type="phone"></input>
                <br></br>

                <label for="age">Age</label>
                <input type="age" type="number"></input>
                <br></br>

                <label for="password">Password</label>
                <input type="password" type="password"></input>
                <br></br>

                <label for="vpassword">Verify password</label>
                <input type="passord" type="password"></input>
                <br></br>

                <input type="submit"></input>
                <br></br>

                <a href="./Home">Home Page</a>
                                
        </form>
        </div>
    )
}