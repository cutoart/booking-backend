const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tableSchema = new Schema({
    tableName: {
        type: String,
        required: true

    },
    totalSeats: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    availability:{
        type: Boolean,
        default: true
    }
}, { timestamps: true },
)

// const restaurantSchema = new Schema({
//         name:{
//             type:String,
//             required:true

//         },
//         totalSeats:{
//             type:Number,
//             required:true

//         }
//     },{timestamps:true},
// )

module.exports = mongoose.model('Table', tableSchema) 