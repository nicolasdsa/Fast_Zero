const Model = require("../utils/model");

class UsersModel extends Model {
  constructor() {
    super("users", {email: 'string', password: 'string', username: 'string', createdAt: Date, updatedAt: Date });
  }

  async create(user){
    const date = new Date();
    const id = await this.collection({...user, createdAt: date, updatedAt: date}).save();
    return id
  }

  async getUser(userEmail) {
    const usersData = await this.collection.findOne({email: userEmail}).exec();
    return usersData;
  }

}

module.exports = new UsersModel();