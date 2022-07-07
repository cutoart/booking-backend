const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    tableName:{
        type:String,
        required:false
    },
    bookingPaxs:{
        type:Number,
        required:false
    },
    
},{timestamps:true})

module.exports = mongoose.model('Booking',bookingSchema) 