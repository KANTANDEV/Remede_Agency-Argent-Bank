//* Import the createSlice function from Redux Toolkit, and the PayloadAction type from Redux Toolkit
//? Importation de la fonction createSlice de Redux Toolkit, et du type PayloadAction de Redux Toolkit
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

//* Import axios
//? Importation d'axios
import axios from 'axios'

//* Import RootState
//? Importation de RootState
import type { RootState } from '../store'

//* Define a type for the slice state
//? Définition d'un type pour l'état du slice
interface UserState {
	logged?: boolean
	token?: string
	firstName?: string
	lastName?: string
}

//* Define the initial state using that type
//? Définition de l'état initial en utilisant ce type
const initialState: UserState = {
	logged: false,
	token: '',
	firstName: '',
	lastName: '',
}

/** //* EN
//* createSlice is a function from the '@reduxjs/toolkit' library that creates a slice of the Redux store for a specific feature or domain of the application.
//* The created slice will have an initial state, an object of reducers, and an extraReducers function.
@function
@param {Object} options - An object that contains the following properties:
@param {string} options.name - A string that represents the name of the slice
@param {Object} options.initialState - An object that represents the initial state of the slice
@param {Object} options.reducers - An object that contains the reducers for the slice
@param {function} options.extraReducers - A function that allows adding additional reducers for the slice
@returns {Object} - An object that contains the slice's state, the actions and the reducer
*/

/** //? FR
	//? Creation d'un slice Redux pour une fonctionnalité ou un domaine spécifique de l'application.
	//? Le slice créé aura un état initial, un objet de réducteurs et une fonction extraReducers.
	@function
	@param {Object} options - Un objet qui contient les propriétés suivantes:
	@param {string} options.name - Une chaîne de caractères qui représente le nom du slice
	@param {Object} options.initialState - Un objet qui représente l'état initial du slice
	@param {Object} options.reducers - Un objet qui contient les réducteurs pour le slice
	@param {function} options.extraReducers - Une fonction qui permet d'ajouter des réducteurs supplémentaires pour le slice
	@returns {Object} - Un objet qui contient l'état du slice, les actions et le réducteur
	*/

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			return { ...state, ...action.payload }
		},
	},
	extraReducers(builder) {
		builder.addCase(updateUser.fulfilled, (state, action) => {
			return { ...state, ...action.payload }
		})
	},
})

/** //*EN
//* createAsyncThunk is a function from the '@reduxjs/toolkit' library that creates an asynchronous action that can be dispatched to update the state of the application.
@function
@param {string} name - A string that represents the name of the async thunk
@param {function} asyncFunction - An async function that perform the logic of the async thunk. This function should return the new state of the application.
@returns {Object} - An object that contains the async thunk's actions (pending, fulfilled, rejected) and the async thunk function
*/

/** //?FR
//? Creation d'une action asynchrone qui peut être envoyée pour mettre à jour l'état de l'application.
@function
@param {string} name - Une chaîne de caractères qui représente le nom de l'async thunk
@param {function} asyncFunction - Une fonction asynchrone qui exécute la logique de l'async thunk. Cette fonction doit renvoyer le nouvel état de l'application.
@returns {Object} - Un objet qui contient les actions de l'async thunk (pending, fulfilled, rejected) et la fonction de l'async thunk
*/

export const updateUser = createAsyncThunk('user/updateUser', async (payload: UserState) => {
	try {
		const { data } = await axios.put('/profile', { ...payload }, { headers: { Authorization: 'Bearer ' + payload.token } })
		return data.body
	} catch (error) {
		return
	}
})

export const { setUser } = userSlice.actions

export const selectFirstName = (state: RootState) => state.user.firstName
export const selectLaststName = (state: RootState) => state.user.lastName

export default userSlice.reducer
