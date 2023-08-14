const mongoose = require('mongoose')

const transeactionSchema = new mongoose.Schema ({
    userId:{
        type: String,
        required: true,
    }, 
    amount:{
        type: Number,
        required: [true, 'amount is required']
    },
    type:{
        type: String,
        required: [true, 'type is required']
    },
    category:{
        type: String,
        required:[true, 'category is required']
    },
    reference:{
        type: String,   
    },
    description:{
        type: String,
        required: [true, 'descriprion is required']
    },
    date:{
        type: String,
        required:[true, 'date is required']
    }
},{timestamps: true})

const transeactionModel = mongoose.model('transeactions', transeactionSchema)
module.exports = transeactionModel