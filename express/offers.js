let mongoose = require('mongoose');

// Use mongoose to initialize the schema
let mongoSchema = mongoose.Schema;

// Use mongoSchema to create reference for offers collection in mongodb

let offersSchema = new mongoSchema( {
    "discountcode" : String,
    "discountpercent" : String
}, {collection : 'offers'});

// Export the model which is created above
module.exports = mongoose.model('offers', offersSchema);