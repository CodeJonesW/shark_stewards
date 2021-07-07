const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class SightingReport extends Model {}

SightingReport.init(
  {
    sharkType: DataTypes.STRING,
    Date: DataTypes.DATE
  },
  {
    sequelize,
    modelName: "SightingReport"
  }
);

module.exports = SightingReport;