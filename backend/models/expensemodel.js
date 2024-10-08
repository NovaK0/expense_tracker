const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    type:{
        type: String,
       default: "Income"
    },
    date:{
        type: Date,
        required: true,
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
},{timestamps:true})


module.exports = mongoose.model('Expense',ExpenseSchema)