import axios from 'axios'
const LIMIT_PER_PAGE = 10
const getAllPosts = (page, query) => {
	console.log(page)
	return axios.get(
		`https://dummyjson.com/posts/?limit=${LIMIT_PER_PAGE}&skip=${
			LIMIT_PER_PAGE * page
		}`
	)
}

const getPost = query => {
	return axios.get(`https://dummyjson.com/posts/search?q=${query}`)
}

const postAPI = {
	getPost,
	getAllPosts,
}
export default postAPI
