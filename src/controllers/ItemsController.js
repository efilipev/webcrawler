const express = require('express');
const { getCategories } = require('../services/MongoService');
const router = express.Router();

router.get('/items', async (req, res, next) => {
    const items = await getCategories();
    return res.json(items[0].data);
});

module.exports = router;
