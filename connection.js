const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'employee';
const client = new MongoClient(url);


async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Increment');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

module.exports = getData;