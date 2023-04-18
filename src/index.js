import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
const Global = createGlobalStyle`
body{
  font-size: 24px;
}
li {
  list-style: none;
}
`

root.render(
	<>
		<App />
		<Global />
		<ToastContainer autoClose={2000} />
	</>
)
