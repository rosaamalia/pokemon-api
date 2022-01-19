'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokemonType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Pokemon, {foreignKey: 'id_pokemon'})
      this.belongsTo(models.Type, {foreignKey: 'id_type'})
    }
  };
  PokemonType.init({
    id_pokemon: DataTypes.INTEGER,
    id_type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PokemonType',
  });
  return PokemonType;
};