// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let product = new Schema(
    {
        productId: {
            type: String,
            unique: true
            
        },
        name: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: ''
        },
        created_date: {
            type: Date,
            default: Date.now
        }, 

        created_time: {
          type: Date,
          default: Date.now
        }
    }
)

mongoose.model('tasktable', product);