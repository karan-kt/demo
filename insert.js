const getData = require('./connection');

const insert = async () => {
    const db = await getData();
    const result = db.insertOne(
        { Intent: 'Order', Triggered: 0 }
    )
}

insert();