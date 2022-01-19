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
   await queryInterface.bulkInsert('categories', [
     { name_category: "Seed" },
     { name_category: "Lizard" },
     { name_category: "Flame" },
     { name_category: "Tiny Turtle" },
     { name_category: "Turtle" },
     { name_category: "Shellfish" },
     { name_category: "Worm" },
     { name_category: "Cocoon" },
     { name_category: "Butterfly" },
     { name_category: "Hairy Bug"},
     { name_category: "Poison Bee"}
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
