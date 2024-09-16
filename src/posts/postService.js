import postSchema from "./postSchema.js"

class PostService {
  async createPost(post) {
    try {
      const createdPost = await postSchema.create(post)
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
      console.log(_id)
      const post = await postSchema.findOne({_id})
      return post
    } catch (e) {
      throw new Error(e)
    }
  }

  async updatePost(_id, data) {
    try {
      const updatedPost = await postSchema.findOneAndUpdate({_id}, data, {new: true})
      return updatedPost
    } catch (e) {
      throw new Error(e)
    }
  }

  async deletePost(_id) {
    try {
      const deletedPost = await postSchema.findOneAndDelete({_id})
      return deletedPost
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new PostService()