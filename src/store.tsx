//* Import Redux Toolkit's configureStore function and our user reducer
//? Importation de la fonction configureStore de Redux Toolkit et de notre reducer user
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './store/user'

//* Create a Redux store holding the state of your app.
//? Création d'un store Redux contenant l'état de notre application.
export const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
