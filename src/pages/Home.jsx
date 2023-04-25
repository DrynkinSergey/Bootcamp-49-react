import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Home = () => {
	const { user } = useAuth()
	const location = useLocation()

	return (
		<div>
			<h1>Welcome to our app, {user} </h1>

			<h2>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magni ut
				asperiores distinctio, provident natus soluta, illum officia laboriosam
				commodi ad incidunt. Fugit dicta eius nisi at porro, nihil repudiandae!
			</h2>
			<Link to='/login' state={{ from: location }}>
				Login
			</Link>
		</div>
	)
}

export default Home
