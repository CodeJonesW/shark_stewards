const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class SightingReport extends Model {}

SightingReport.init(
  {
    sharkType: DataTypes.STRING,
    submissionDate: DataTypes.DATE,
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