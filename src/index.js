import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components'
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
	</>
)
