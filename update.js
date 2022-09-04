const getData = require('./connection')

const update = async () => {
    const db = await getData();
    const result = db.updateOne({ Intent: 'Fallback' },
        {
            $inc: {
                Triggered: 1
            }
        })
}

update();
