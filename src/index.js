import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<App />
		<ToastContainer autoClose={2000} />
	</>
)
