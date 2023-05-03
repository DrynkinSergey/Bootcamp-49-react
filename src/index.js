import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<Provider store={store}>
			<App />
			<ToastContainer autoClose={2000} />
		</Provider>
	</>
)
