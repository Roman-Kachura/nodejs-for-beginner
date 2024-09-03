require('dotenv').config()

const App = require('express')
const mongoose = require('mongoose')

const uri = 'mongodb+srv://romakachyra:Y9k3K1nvDZ9hwxMh@nodejs-for-beginner-clu.ap2ok.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-for-beginner-cluster'

const app = new App()

app.listen(process.env.PORT, () => {
  try{
    mongoose.connect(uri)
    console.log('Connected with the database has been successful!')
  }catch (e) {
    console.log(e)
  }
  console.log(`Server started on port: ${process.env.PORT}`)
})