const mongoose = require('mongoose')

const db = async () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Database connection error:', err))
}

module.exports = {db}


