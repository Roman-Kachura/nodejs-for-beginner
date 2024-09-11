import userService from "./userService.js"

class UserController {
  async createUser(req, res) {
    try {
      const {name} = req.body

      if (!name) return res.status(400).send({message: 'Name field is required!'})

      const data = await userService.createUser(name)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message:e.message})
    }
  }

  async getUsers(req, res) {
    try {
      const data = await userService.getUsers()
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message:e.message})
    }
  }

  async getOneUser(req, res) {
    try {
      const {id} = req.params
      const data = await userService.getOneUser(id)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message:e.message})
    }
  }

  async updateUser(req, res) {
    try {
      const id = req.params.id
      const {name} = req.body
      const data = await userService.updateUser(id, name)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message:e.message})
    }
  }

  async deleteUser(req, res) {
    try {
      const data = await userService.deleteUser(req.params.id)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message:e.message})
    }
  }
}

export default new UserController()