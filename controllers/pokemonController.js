const models = require('../models/index')

/**
 * LIST DATA POKEMON DENGAN LIMIT
 */
const getPokemon = async (req, res) => {
    try {
        const limit = req.body.limit;

        let pokemons = await models.Pokemon.findAll({
            include: [
                {
                    model: models.Category,
                    as: 'category',
                    attributes: ['name_category']
                },
                {
                    model: models.Type,
                    as: 'type',
                    through: {
                        attributes: []
                    },
                    attributes: ['name_type']
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            limit: limit
        })

        res.status(200).send({
            data: pokemons
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
 * MENAMBAHKAN DATA POKEMON
 */

const addPokemon = async (req, res) => {
    try {
        const number = req.body.number;
        const name = req.body.name;
        const height = req.body.height;
        const weight = req.body.weight;
        const category = req.body.category;
        const type = req.body.type;

        const newPokemon = await models.Pokemon.create({
            id_category: category,
            number: number,
            name: name,
            height: height,
            weight: weight
        })

        type.forEach(async function(type) {
            await models.PokemonType.create({
                id_pokemon: newPokemon.id,
                id_type: type
            })
        });

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
 * MEMPERBARUI DATA POKEMON
 */

const updatePokemon = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        const number = req.body.number;
        const name = req.body.name;
        const height = req.body.height;
        const weight = req.body.weight;
        const category = req.body.category;
        const type = req.body.type;

        await models.Pokemon.update({
            id_category: category,
            number: number,
            name: name,
            height: height,
            weight: weight
        }, {
            where: {
                id: id
            }
        })

        await models.PokemonType.destroy({
            where: {
                id_pokemon: id
            }
        })

        type.forEach(async function(type) {
            await models.PokemonType.create({
                id_pokemon: id,
                id_type: type
            })
        });

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
 * MENGHAPUS DATA POKEMON
 */

const deletePokemon = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await models.Pokemon.destroy({
            where: {
                id: id
            }
        });

        await models.PokemonType.destroy({
            where: {
                id_pokemon: id
            }
        })
        
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
    getPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
}