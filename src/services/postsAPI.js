import axios from 'axios'

const getAllPosts = () => {
	return axios.get(`https://dummyjson.com/posts/`)
}
const getPost = query => {
	return axios.get(`https://dummyjson.com/posts/search?q=${query}`)
}

const postAPI = {
	getPost,
	getAllPosts,
}
export default postAPI
