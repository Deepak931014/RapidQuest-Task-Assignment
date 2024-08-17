const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.get('/new-customers', async (req, res) => {
    try {
        // Implement logic to get new customers added over time
        const newCustomers = await Customer.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$created_at" } },
                    count: { $sum: 1 }
                }
            }
        ]);
        res.json(newCustomers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/repeat-customers', async (req, res) => {
    // Implement logic to identify repeat customers
});

module.exports = router;
