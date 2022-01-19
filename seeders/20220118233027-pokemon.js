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
    await queryInterface.bulkInsert('pokemons', [
      {
        id_category: 1,
        number: "#001",
        name: "Bulbasaur",
        height: 71.12,
        weight: 15.2
      },
      {
        id_category: 1,
        number: "#002",
        name: "Ivysaur",
        height: 99.06,
        weight: 28.7
      },
      {
        id_category: 1,
        number: "#003",
        name: "Venusaur",
        height: 200.66,
        weight: 220.5
      },
      {
        id_category: 2,
        number: "#004",
        name: "Charmander",
        height: 60.96,
        weight: 18.7
      },
      {
        id_category: 3,
        number: "#005",
        name: "Charmeleon",
        height: 109.22,
        weight: 41.9
      },
      {
        id_category: 3,
        number: "#006",
        name: "Charizard",
        height: 170.18,
        weight: 199.5
      },
      {
        id_category: 4,
        number: "#007",
        name: "Squirtle",
        height: 1.66,
        weight: 19.8
      },
      {
        id_category: 5,
        number: "#008",
        name: "Wartortle",
        height: 99.06,
        weight: 49.6
      },
      {
        id_category: 6,
        number: "#009",
        name: "Blastoise",
        height: 5.25,
        weight: 188.5
      },
      {
        id_category: 7,
        number: "#010",
        name: "Caterpie",
        height: 30.48,
        weight: 6.4
      },
      {
        id_category: 8,
        number: "#011",
        name: "Metapod",
        height: 71.12,
        weight: 21.8
      },
      {
        id_category: 9,
        number: "#012",
        name: "Butterfree",
        height: 109.22,
        weight: 70.5
      },
      {
        id_category: 10,
        number: "#013",
        name: "Weedle",
        height: 30.48,
        weight: 7.1
      },
      {
        id_category: 8,
        number: "#014",
        name: "Kakuna",
        height: 60.96,
        weight: 22.0
      },
      {
        id_category: 11,
        number: "#015",
        name: "Beedrill",
        height: 99.06,
        weight: 65.0
      },
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
