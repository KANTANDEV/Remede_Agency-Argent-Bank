//* imports the React, ReactDOM
//? Importations REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
//* Provider component from the 'react-redux' library
//? Importations REDUX
import { Provider } from 'react-redux'
//*import Axios
//? Importations AXIOS
import axios from 'axios'
//* Import the App component
//? Importations du composant APP
import App from './App'
//* Import styles
//? Importations des styles
import './styles/index.sass'
//* Import Redux store
//? Importations du store Redux
import { store } from './store'
//* Set the base URL for the Axios
//? Définition de l'URL de base pour Axios
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user'

//* Render the App component
//? Rendu du composant App
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
