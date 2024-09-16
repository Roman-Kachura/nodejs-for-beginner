import {Router} from 'express'
import postController from './postController.js'

const router = Router()

router.post('/posts', postController.createPost)
router.get('/posts', postController.getPosts)
router.get('/posts/:id', postController.getOnePost)
router.put('/posts/:id', postController.updatePost)
router.delete('/posts/:id', postController.deletePost)

export default router