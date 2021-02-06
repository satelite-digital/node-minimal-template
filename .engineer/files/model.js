const Sequelize = require('sequelize')
const sequelize = require('../sequelize.js')

const {{firstUppercase}} = sequelize.define('{{id}}', {
  {{#if options.isUser}}
  oAuthId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  oAuthData: {
    type: Sequelize.JSONB
  },
  {{/if}}
  {{#each fields}}
  {{id}}: {
    type: Sequelize.{{type}},
    {{#if options.optional}}
    allowNull: true,
    {{else}}
    allowNull: false,
    {{/if}}
    {{#if options.default}}
    defaultValue: {{{options.default}}}
    {{/if}}
  }{{#if @last}}{{else}},{{/if}}
  {{/each}}
});

{{firstUppercase}}.sync()

module.exports = {{firstUppercase}};