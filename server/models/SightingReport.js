const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class SightingReport extends Model {}

SightingReport.init(
  {
    sharkType: DataTypes.STRING,
    description: DataTypes.STRING,
    timeOfSighting: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    subscribe: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "SightingReport"
  }
);

module.exports = SightingReport;