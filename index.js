import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from "./src/users/userRouter.js"
import postRouter from "./src/posts/postRouter.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(postRouter)

app.get('/',(req,res) => {
  return res.send({message:'Server works!'}).status(200)
})

async function startApp(){
  try{
    await mongoose.connect(process.env.DB_URL)
    app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`))
  }catch (e) {
    console.log(e)
  }
}

startApp()