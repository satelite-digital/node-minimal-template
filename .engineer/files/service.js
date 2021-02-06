// api/db/services/user.js
const {{firstUppercase}} = require('../models/{{id}}');

module.exports = {
  {{#if options.isUser}}
  findOrCreate: async (oAuthData) => {
    
    try {
      const user = await User.findOne( { where : { oAuthId: oAuthData.id } });

      if (!user) {
        const newUser =  await User.create({oAuthId: oAuthData.id, oAuthData: oAuthData})
        return newUser
      }
      return user;
    } catch (e) {
      return Error('User not found');
    }
  },
  {{/if}}
  findAll: async (id) => {
    return {{firstUppercase}}.findAll();
  },
  findById: async (id) => {
    return {{firstUppercase}}.findOne({ where : { id: id } });
  },
  create : async (data)=>{
    return {{firstUppercase}}.create(data)
  },
  update : async (id, data)=>{
    return {{firstUppercase}}.update(data, { where : {
      id : id || {{firstUppercase}}.id
    } })
  },
  delete : async (id)=>{
    return {{firstUppercase}}.destroy({
      where : {
        id : id 
      }
    })
  }
};
