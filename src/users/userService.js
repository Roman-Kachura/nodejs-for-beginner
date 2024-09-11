import UserModel from './userSchema.js'

class UserService {
  async createUser(name) {
    try {
      const user = await UserModel.create({name})
      user.save()
      return user
    } catch (e) {
      throw new Error(e)
    }
  }

  async getUsers() {
    try {
      const users = await UserModel.find({})
      return users
    } catch (e) {
      throw new Error(e)
    }
  }

  async getOneUser(_id) {
    try {
      const user = await UserModel.findOne({_id})
      return user
    } catch (e) {
      throw new Error(e)
    }
  }

  async updateUser(_id, name) {
    try {
      const user = await UserModel.findOneAndUpdate({_id}, {name})
      await user.save()
      return await UserModel.findOne({_id})
    } catch (e) {
      throw new Error(e)
    }
  }

  async deleteUser(_id) {
    try {
      const user = await UserModel.findOneAndDelete({_id})
      return {message:'User has been deleted successfully!'}
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new UserService()