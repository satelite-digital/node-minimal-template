// api/db/services/user.js
const User = require('../models/user');

module.exports = {
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
  findAll: async (id) => {
    return User.findAll();
  },
  findById: async (id) => {
    return User.findOne({ where : { id: id } });
  },
  create : async (data)=>{
    return User.create(data)
  },
  update : async (id, data)=>{
    return User.update(data, { where : {
      id : id || User.id
    } })
  },
  delete : async (id)=>{
    return User.destroy({
      where : {
        id : id 
      }
    })
  }
};
