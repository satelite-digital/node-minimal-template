const Sequelize = require('sequelize')
const sequelize = require('../sequelize.js')

const User = sequelize.define('user', {
  oAuthId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  oAuthData: {
    type: Sequelize.JSONB
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

User.sync()

module.exports = User;