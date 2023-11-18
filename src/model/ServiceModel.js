
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ServiceSchema = new Schema ({
    code_service : {
        type: String,
        require: true
    },
    name_service: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    img_banner:{
        type: String,
        require: true
    },
    image_slide: {
        img_list: [
            {
                type: String,
                required: true,
            },
            
        ]
    },
    description: {
        type: String,
        require: true
    },
    created_date: { 
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }


}, {collection: 'services'})

const ServiceModel = mongoose.model('service', ServiceSchema);


module.exports = { 
  ServiceModel 
};
