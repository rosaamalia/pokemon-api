const express = require('express');
const router = express.Router();
const PokemonCotroller = require('../controllers/pokemonController');

/**
 * GET
 */
 router.get("/", PokemonCotroller.getPokemon);

 /**
  * POST
  */
 router.post("/", PokemonCotroller.addPokemon);
 
 /**
  * PUT
  */
 router.put("/:id", PokemonCotroller.updatePokemon);
 
 /**
  * DELETE
  */
 router.delete("/:id", PokemonCotroller.deletePokemon);
 
 module.exports = router;
