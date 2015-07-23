// models/prototype.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrototypeSchema = new Schema({
    event: String,
    img: String,
    description: String,
    activities:
    [
        {
            name: String
        }
    ],
    expenses:
    [
        {
            name: String
        }
    ],
    cost: Number
});

module.exports = mongoose.model('Prototype', PrototypeSchema);
