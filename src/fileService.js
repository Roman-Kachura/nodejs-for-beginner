import * as uuid from 'uuid'
import * as path from 'path'
import * as fs from "fs";

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve('static', 'images', fileName)
      file.mv(filePath)
      return fileName
    } catch (e) {
      throw new Error(e)
    }
  }

  updateFile(file, fileName) {
    try {
      const filePath = path.resolve('static', 'images', fileName)
      file.mv(filePath)
      return fileName
    } catch (e) {
      throw new Error(e)
    }
  }

  async deleteFile(fileName){
    try{
      const filePath = path.resolve('static', 'images', fileName)
      await fs.rmSync(filePath)
      return {message:'Files was deleted successfully!'}
    }catch (e) {
      throw new Error(e)
    }
  }
}

export default new FileService()