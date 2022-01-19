const express = require('express');
const router = express.Router();

const pokemon = require('./pokemon');
const category = require('./category');
const type = require('./type');

router.get("/", (req, res) => {
    res.send("Data Pokemon");
})

router.use('/pokemon', pokemon);
router.use('/category', category);
router.use('/type', type);

module.exports = router;