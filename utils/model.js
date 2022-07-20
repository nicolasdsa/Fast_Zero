const database = require("./database");

class  Model {
  constructor(collectionName, schema) {
    this.collectionName = collectionName;
    this.schema = schema;
  }

  get collection(){
    return database.getCollection(this.collectionName, this.schema);
  }
}

module.exports = Model;