module.exports = async (config)=>{
  const schema = config.data.schema.map((obj)=>{
    obj.firstUppercase = `${obj.id[0].toUpperCase()}${obj.id.substring(1)}`
    obj.slug = obj.id.split(" ").join("-")
    return obj
  })
  config.data.schema = schema
  return config
}

