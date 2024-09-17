import postSchema from "./postSchema.js"
import fileService from "../fileService.js"

class PostService {
  async createPost(post, picture) {
    const fileName = fileService.saveFile(picture)

    try {
      const createdPost = await postSchema.create({...post, picture: fileName})
      await createdPost.save()
      return createdPost
    } catch (e) {
      throw new Error(e)
    }
  }

  async getPosts() {
    try {
      const posts = await postSchema.find()
      return posts
    } catch (e) {
      throw new Error(e)
    }
  }

  async getOnePost(_id) {
    try {
      const post = await postSchema.findOne({_id})
      return post
    } catch (e) {
      throw new Error(e)
    }
  }

  async updatePost(_id, data, picture) {
    if (!_id) throw new Error('ID not found')

    try {
      const updatedPost = await postSchema.findOneAndUpdate({_id}, data, {new: true})
      if (picture) await fileService.updateFile(picture, updatedPost.picture)
      return updatedPost
    } catch (e) {
      throw new Error(e)
    }
  }

  async deletePost(_id) {
    if (!_id) throw new Error('ID not found')

    try {
      const deletedPost = await postSchema.findOneAndDelete({_id})
      await fileService.deleteFile(deletedPost.picture)
      return deletedPost
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new PostService()