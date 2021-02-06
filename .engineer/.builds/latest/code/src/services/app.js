// api/db/services/user.js
const  = require('../models/');

module.exports = {
  findAll: async (id) => {
    return .findAll();
  },
  findById: async (id) => {
    return .findOne({ where : { id: id } });
  },
  create : async ()=>{
    return .create()
  },
  update : async (id, )=>{
    return .update(, { where : {
      id : id || .id
    } })
  },
  delete : async (id)=>{
    return .destroy({
      where : {
        id : id 
      }
    })
  }
};
