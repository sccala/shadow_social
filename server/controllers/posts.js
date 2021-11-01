import PostMessage from '../models/postMessage.js'

export const getPosts = (req, res) => {
  try {
    const postMessages = PostMessage.find()
  } catch (error) {
    res.status(400).json
  }
}

export const createPost = (req, res) => {
  try {
    res.send('Post Creation')
  } catch (error) {
    res.status(400).json
  }
}
