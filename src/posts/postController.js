import postService from "./postService.js"
import path from "path";

class postController {
  async createPost(req, res) {
    try {
      const data = await postService.createPost(req.body, req.files.picture)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message: e.message})
    }
  }

  async getPosts(req, res) {
    try {
      const data = await postService.getPosts()
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message: e.message})
    }
  }

  async getOnePost(req, res) {
    try {
      const data = await postService.getOnePost(req.params.id)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message: e.message})
    }
  }

  async updatePost(req, res) {
    try {
      const data = await postService.updatePost(req.params.id, req.body, req.files?.picture)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message: e.message})
    }
  }

  async deletePost(req, res) {
    try {
      const data = await postService.deletePost(req.params.id)
      return res.status(200).send(data)
    } catch (e) {
      return res.status(500).send({message: e.message})
    }
  }

  getPostsPage(req, res) {
    return res.sendFile(path.resolve('static', 'posts.html'))
  }
}

export default new postController()