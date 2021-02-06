// api/db/services/user.js
const App = require('../models/app');

module.exports = {
  findAll: async (id) => {
    return App.findAll();
  },
  findById: async (id) => {
    return App.findOne({ where : { id: id } });
  },
  create : async (data)=>{
    return App.create(data)
  },
  update : async (id, data)=>{
    return App.update(data, { where : {
      id : id || App.id
    } })
  },
  delete : async (id)=>{
    return App.destroy({
      where : {
        id : id 
      }
    })
  }
};
