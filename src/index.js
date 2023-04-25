import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hoc/AuthProvider'
const root = ReactDOM.createRoot(document.getElementById('root'))
const Global = createGlobalStyle`
body{
  font-size: 24px;
}
li {
  list-style: none;
}
a{
	color: inherit;
}
`

root.render(
	<>
		<BrowserRouter>
			{/* // 4. Огортаємо <App/> у наш AuthProvider, для того щоб роздати контекст для всіх компонентів всередині */}
			<AuthProvider>
				<App />
			</AuthProvider>
			<Global />
			<ToastContainer autoClose={2000} />
		</BrowserRouter>
	</>
)
