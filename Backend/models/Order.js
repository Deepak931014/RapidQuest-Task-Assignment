const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    total_price_set: {
        shop_currency: Number
    },
    created_at: Date,
    customer: {
        id: String
    }
});

module.exports = mongoose.model('Order', OrderSchema);
