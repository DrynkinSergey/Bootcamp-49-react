import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
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
		{/* <PersistGate loading={null} persistor={persistor}> */}
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<Global />
				<ToastContainer autoClose={2000} />
			</Provider>
		</BrowserRouter>

		{/* </PersistGate> */}
	</>
)
