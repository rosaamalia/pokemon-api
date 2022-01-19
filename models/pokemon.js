'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {foreignKey: 'id_category', as: 'category', hooks: true, onDelete: 'cascade'})
      this.belongsToMany(models.Type, {through: 'PokemonTypes', foreignKey: 'id_pokemon', as: 'type'})
    }
  };
  Pokemon.init({
    id_category: DataTypes.INTEGER,
    number: DataTypes.STRING,
    name: DataTypes.STRING,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};