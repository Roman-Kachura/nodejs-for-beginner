import userController from "./userController.js"
import {Router} from "express"

const userRouter = Router()

userRouter.get('/users', userController.getUsersPage)

userRouter.post('/api/users', userController.createUser)
userRouter.get('/api/users', userController.getUsers)
userRouter.get('/api/users/:id', userController.getOneUser)
userRouter.put('/api/users/:id', userController.updateUser)
userRouter.delete('/api/users/:id', userController.deleteUser)

export default userRouter
