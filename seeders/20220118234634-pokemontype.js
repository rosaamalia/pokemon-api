'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('pokemontypes', [
      {
        id_pokemon: 1,
        id_type: 1
      },
      {
        id_pokemon: 1,
        id_type: 2
      },
      {
        id_pokemon: 2,
        id_type: 1
      },
      {
        id_pokemon: 2,
        id_type: 2
      },
      {
        id_pokemon: 3,
        id_type: 1
      },
      {
        id_pokemon: 3,
        id_type: 2
      },
      {
        id_pokemon: 4,
        id_type: 3
      },
      {
        id_pokemon: 5,
        id_type: 3
      },
      {
        id_pokemon: 6,
        id_type: 3
      },
      {
        id_pokemon: 6,
        id_type: 4
      },
      {
        id_pokemon: 7,
        id_type: 5
      },
      {
        id_pokemon: 8,
        id_type: 5
      },
      {
        id_pokemon: 9,
        id_type: 5
      },
      {
        id_pokemon: 10,
        id_type: 6
      },
      {
        id_pokemon: 11,
        id_type: 6
      },
      {
        id_pokemon: 12,
        id_type: 6
      },
      {
        id_pokemon: 12,
        id_type: 4
      },
      {
        id_pokemon: 13,
        id_type: 6
      },
      {
        id_pokemon: 13,
        id_type: 2
      },
      {
        id_pokemon: 14,
        id_type: 6
      },
      {
        id_pokemon: 14,
        id_type: 2
      },
      {
        id_pokemon: 15,
        id_type: 6
      },
      {
        id_pokemon: 15,
        id_type: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
