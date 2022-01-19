const models = require('../models/index')

/**
 * LIST SEMUA TIPE
 */
const getType = async (req, res) => {
    try {
        let type = await models.Type.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        res.status(200).send({
            data: type
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
 * TAMBAH TIPE
 */
const addType = async (req, res) => {
    try {
        const name_type = req.body.name_type;

        await models.Type.create({
            name_type: name_type
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
 * UPDATE TIPE
 */
const updateType = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const name_type = req.body.name_type;

        await models.Type.update({
            name_type: name_type
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
 * HAPUS TIPE
 */
const deleteType = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await models.PokemonType.destroy({
            where: {
                id_type: id
            }
        })
        
        await models.Type.destroy({
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
    getType,
    addType,
    updateType,
    deleteType
}