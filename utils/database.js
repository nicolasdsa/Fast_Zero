const mongoose = require('mongoose');

class DataBase {
  constructor() {
    this.url = 'mongodb://localhost:27017';
    this.db = 'products-system'
  }

  async init() {
    await mongoose.connect(`${this.url}/${this.db}`)
    this.connection = mongoose.connection;
  }

  getCollection(collection, schema){
      try {
        return this.connection.model(collection)
      } catch (error) {
        return this.connection.model(collection, schema);
    }
  }
}

module.exports = new DataBase()