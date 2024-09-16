import {Schema, model} from "mongoose"

const postSchema = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  uid: {type: String, required: true}
})

export default model('post', postSchema)