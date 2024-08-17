const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const salesRoutes = require('./routes/sales');
const customerRoutes = require('./routes/customers');
const geographicalRoutes = require('./routes/geographical');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/sales', salesRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/geographical', geographicalRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
