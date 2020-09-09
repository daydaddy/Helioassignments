import React from 'react'

const LoggedInContext = React.createContext()

const LoggedInProvider = (props) => {

    let [users, setusers] = React.useState([])
    let [loggedIn, setLoggedIn] = React.useState(false)


    // toDo
    // function to update password
    // if user exists then set new password
    const updatePass = (username, password) => {

        let rtnValue = false

        let foundUser = users.findIndex(user => user.username === username)

        if (foundUser !== -1) {
            // is found

            // copy array
            let tmpUsers = [...users]

            tmpUsers[foundUser].password = password

            // set new state
            setusers(tmpUsers)

            rtnValue = true
        }
        return rtnValue
    }
    // function to check user
    const checkUser = (username, password) => {
        let rtnValue = false
        // if username and password match return true
        let found = users.findIndex(user => user.username === username && user.password === password)

        if (found !== -1) {
            setLoggedIn(true)
            rtnValue = true
        }

        return rtnValue

    }
    // function to add user
    const addUser = (username, password) => {

        let rtnValue = false

        // check to see if user exists
        if (users.findIndex(element => username === element.username) === -1) {

            // not found
            let tmpUsers = [...users]
            tmpUsers.push({ username, password })
            setusers(tmpUsers)
            rtnValue = true
        } else {
            throw new Error("User Already Exists")
        }
        return rtnValue
    }

    return (
        <LoggedInContext.Provider value={{users, loggedIn, updatePass, checkUser, addUser}}>
            {props.children}
        </LoggedInContext.Provider>
    )



}

const LoggedInConsumer = LoggedInContext.Consumer
export {LoggedInContext, LoggedInProvider, LoggedInConsumer}