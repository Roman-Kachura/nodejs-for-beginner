import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from "./src/users/userRouter.js"
import postRouter from "./src/posts/postRouter.js"
import * as path from 'path'
import uploader from 'express-fileupload'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static(path.resolve('static')))
app.use(express.static(path.resolve('static', 'images')))
app.use(uploader({}))

app.use(userRouter)
app.use(postRouter)

app.get('/', (req, res) => {
  return res.sendFile(path.resolve('static', 'index.html'))
})

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startApp()