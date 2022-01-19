const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');

/**
 * GET
 */
router.get('/', CategoryController.getCategory);

/**
 * POST
 */
router.post('/', CategoryController.addCategory);

/**
 * PUT
 */
router.put('/:id', CategoryController.updateCategory);

/**
 * DELETE
 */
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;