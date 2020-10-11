const express = require('express');
const { handleCellPhonesPage } = require('../strategies/EbayStrategies');
const router = express.Router();

router.get('/items', async (req, res, next) => {
    const ul = await handleCellPhonesPage();
    console.log('ULLL ---', ul)
    return res.json(ul);
});

module.exports = router;
