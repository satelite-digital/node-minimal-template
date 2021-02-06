const examplePlugin = require("./.engineer/plugins/example.plugin");

const main = async ()=>{

  let config = {
    "data" : require('./../instantcode.schema.json'),
    "fileTemplates" : [
      {
        "src" : "./.engineer/files/model.js",
        "dest" : "./src/models/[id].js",
        "key" : "schema"
      },
      {
        "src" : "./.engineer/files/service.js",
        "dest" : "./src/services/[id].js",
        "key" : "schema"
      },
      {
        "src" : "./.engineer/files/route.js",
        "dest" : "./src/routes/[id].js",
        "key" : "schema"
      },
      {
        "src" : "./.engineer/files/app.js",
        "dest" : "./src/app.js"
      }
    ]
  }
  
  config = await examplePlugin(config)
  return config

}

module.exports = main()