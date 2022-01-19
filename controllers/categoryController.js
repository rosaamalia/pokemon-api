const models = require('../models/index')

/**
 * LIST SEMUA KATEGORI
 */
const getCategory = async (req, res) => {
    try {
        let category = await models.Category.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        res.status(200).send({
            data: category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error when getting data.",
            error: error
        })
    }
}

/**
 * TAMBAH KAETGORI
 */
const addCategory = async (req, res) => {
    try {
        const name_category = req.body.name_category;

        await models.Category.create({
            name_category: name_category
        })

        res.status(200).send({
            message: "OK"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error when inserting data.",
            error: error
        })
    }
}

/**
 * UPDATE KATEGORI
 */
const updateCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const name_category = req.body.name_category;

        await models.Category.update({
            name_category: name_category
        }, {
            where: {
                id: id
            }
        })

        res.status(200).send({
            message: "OK"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error when updating data.",
            error: error
        })
    }
}

/**
 * HAPUS KATEGORI
 */
const deleteCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await models.Pokemon.destroy({
            where: {
                id_category: id
            }
        })
        
        await models.Category.destroy({
            where: {
                id: id
            }
        });

        res.status(200).send({
            message: "OK"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error when deleting data.",
            error: error
        })
    }
}

module.exports = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}