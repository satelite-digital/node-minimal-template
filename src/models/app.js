const Sequelize = require('sequelize')
const sequelize = require('../sequelize.js')

const App = sequelize.define('app', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isPublished: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: "false"
  },
  detail: {
    type: Sequelize.JSONB,
    allowNull: true,
  }
});

App.sync()

module.exports = App;