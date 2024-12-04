'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pungutan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pungutan.init({
    nama: DataTypes.STRING,
    nilai: DataTypes.FLOAT,
    biayaTambahan: DataTypes.FLOAT,
    biayaPengurangan: DataTypes.FLOAT,
    voluntaryDeclaration: DataTypes.FLOAT,
    nilaiAsuransi: DataTypes.FLOAT,
    freight: DataTypes.FLOAT,
    kurs: DataTypes.FLOAT,
    fob: DataTypes.FLOAT,
    cif: DataTypes.FLOAT,
    cifRp: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pungutan',
  });
  return Pungutan;
};