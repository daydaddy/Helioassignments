const db = require("./dal")

db.connect()
.then(() => {
    
    db.insertOne()

})
.then(() => {
    
    return db.readAll()

})
.then(users => {

    console.log(users)

})
.then(() => {
    db.deleteOne()
})
.then(() => {
    
    return db.readAll()

})
.then(users => {

    console.log(users)

})
.then(() => {
    db.replaceOne()
})
.then(() => {
    
    return db.readAll()

})
.then(users => {

    console.log(users)

})
.then(() => {
    return db.findOne()
})
.then(users => {

    console.log(users)

})
.then(() => {
    
    db.close()
})