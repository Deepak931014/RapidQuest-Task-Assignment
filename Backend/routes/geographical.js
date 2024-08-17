const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.get('/geo-distribution', async (req, res) => {
    try {
        // Implement logic to get geographical distribution of customers
        const geoData = await Customer.aggregate([
            {
                $group: {
                    _id: "$default_address.city",
                    count: { $sum: 1 }
                }
            }
        ]);
        res.json(geoData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
