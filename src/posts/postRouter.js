import {Router} from 'express'
import postController from './postController.js'

const router = Router()

router.get('/posts', postController.getPostsPage)

router.post('/api/posts', postController.createPost)
router.get('/api/posts', postController.getPosts)
router.get('/api/posts/:id', postController.getOnePost)
router.put('/api/posts/:id', postController.updatePost)
router.delete('/api/posts/:id', postController.deletePost)

export default router