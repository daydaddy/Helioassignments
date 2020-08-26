require('dotenv').config()
const { MongoClient, Cursor } = require("mongodb");
let client = null
let usersCollection = null

function connect() {

    const uri = `mongodb+srv://Daydaddy:${process.env.DB_PASSWORD}@cluster0.bozpe.mongodb.net/Helio?retryWrites=true&w=majority`

    // Create a new MongoClient
    client = new MongoClient(uri, { useUnifiedTopology: true });

    // Connect the client to the server
    return client.connect()
        .then(() => {

            console.log("Connected successfully to server");
            // connect to collection
            return client.db("Helio").collection('Users');
        })
        .then(collection => {
            usersCollection = collection
        })
        .catch((err) => {
            console.log(err)
        })

}

function insertOne() {

    return usersCollection.insertOne({
        fName: "Monkey",
        lName: "Boy"
    })

}

function readAll() {

    let rtnValue = usersCollection.find({}).toArray()

    return rtnValue
}

function close() {
    client.close()
}

function deleteOne() {
    return usersCollection.findOneAndDelete({fName: "Monkey"})
}

function replaceOne() {
    return usersCollection.findOneAndReplace({fName: "Monkey"},{fName: "Frank"})  

}

function findOne() {
    return usersCollection.findOne({fName: "Frank"})

}

module.exports.connect = connect
module.exports.insertOne = insertOne
module.exports.readAll = readAll
module.exports.close = close
module.exports.deleteOne = deleteOne
module.exports.replaceOne = replaceOne
module.exports.findOne = findOne