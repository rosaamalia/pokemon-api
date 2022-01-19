const express = require('express');
const router = express.Router();
const TypeController = require('../controllers/typeController');

/**
 * GET
 */
router.get('/', TypeController.getType);

/**
 * POST
 */
router.post('/', TypeController.addType);

/**
 * PUT
 */
router.put('/:id', TypeController.updateType);

/**
 * DELETE
 */
router.delete('/:id', TypeController.deleteType);

module.exports = router;