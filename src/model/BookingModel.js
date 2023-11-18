
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema  = new Schema({
    booking_code: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    code_service: {
        type: String,
        require: true
    },
    booking_time:{
        type: Date,
        return: true
    },
    totalMoney: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        default: "wait"
    },
    create_date: {
        type: Date,
        default:  Date.now()
    },
    update_date: {
        type: Date,
        default: Date.now
    }
}, {collection: "bookings"})

const BookingModel = mongoose.model('booking', BookingSchema);


module.exports = { 
    BookingModel
};
