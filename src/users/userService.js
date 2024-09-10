class UserService {
  async createUser(name) {
    try {
      return {message: 'create user'}
    } catch (e) {
      console.log(e)
    }
  }

  async getUsers() {
    try {
      return {message: 'get users'}
    } catch (e) {
      console.log(e)
    }
  }

  async getOneUser(id) {
    try {
      return {message: 'get one user'}
    } catch (e) {
      console.log(e)
    }
  }

  async updateUser(id, name) {
    try {
      return {message: 'update user'}
    } catch (e) {
      console.log(e)
    }
  }

  async deleteUser(id) {
    try {
      return {message: 'delete user'}
    } catch (e) {
      console.log(e)
    }
  }
}

export default new UserService()