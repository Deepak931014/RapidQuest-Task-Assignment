const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    id: String,
    created_at: Date,
    default_address: {
        city: String,
        state: String,
        postal_code: String,
        country: String
    },
    name: String,
    email: String,
    phone: String,
    loyalty_points: Number
});

module.exports = mongoose.model('Customer', CustomerSchema);
