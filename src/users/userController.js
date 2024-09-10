import userService from "./userService.js"

class UserController {
  async createUser(req, res) {
    try {
      const data = await userService.createUser()
      return res.send(data).status(200)
    } catch (e) {
      console.log(e)
    }
  }

  async getUsers(req, res) {
    try {
      const data = await userService.getUsers()
      return res.send(data).status(200)
    } catch (e) {
      console.log(e)
    }
  }

  async getOneUser(req, res) {
    try {
      const data = await userService.getOneUser()
      return res.send(data).status(200)
    } catch (e) {
      console.log(e)
    }
  }

  async updateUser(req, res) {
    try {
      const data = await userService.updateUser()
      return res.send(data).status(200)
    } catch (e) {
      console.log(e)
    }
  }

  async deleteUser(req, res) {
    try {
      const data = await userService.deleteUser()
      return res.send(data).status(200)
    } catch (e) {
      console.log(e)
    }
  }
}

export default new UserController()