const MongoClient = require('mongodb').MongoClient

// const config = require('../config')

// module.exports = {
//     getCollection
// }

// Database Name
const dbName: string = 'user_db'

var dbURL: string = 'mongodb://localhost:27017'

export async function getCollection(collectionName: string) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        return collection
    } catch (err) {
        throw err
    }
}

async function connect() {
    try {
        const client = await MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(dbName)
        dbURL = db
        return db
    } catch (err) {
        throw err
    }
}




