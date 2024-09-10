import userController from "./userController.js"
import {Router} from "express"

const userRouter = Router()

userRouter.post('/users', userController.createUser)
userRouter.get('/users', userController.getUsers)
userRouter.get('/users:id', userController.getOneUser)
userRouter.put('/users:id', userController.updateUser)
userRouter.delete('/users:id', userController.deleteUser)

export default userRouter
