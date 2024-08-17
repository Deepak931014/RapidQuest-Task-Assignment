const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: String
    // Add other fields as needed
});

module.exports = mongoose.model('Product', ProductSchema);
