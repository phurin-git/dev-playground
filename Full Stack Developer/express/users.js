const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Get a list of all users');
});

module.exports = router;