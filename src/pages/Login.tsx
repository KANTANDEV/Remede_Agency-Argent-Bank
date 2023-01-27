//* Import React and React Router
//? Import React et React Router
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
//* Import Axios
import axios from 'axios'
//* Import Hooks
import { useAppSelector, useAppDispatch } from '../hooks'
//* Import Redux
import { setUser } from '../store/user'

/** //* EN
A functional component that handles user login.
@returns {JSX.Element} - A React element that displays a login form if the user is not logged in, otherwise redirects to the profile page.
*/
/** //? FR
 * Un composant fonctionnel qui gère la connexion de l'utilisateur.
 * @returns {JSX.Element} - Un élément React qui affiche un formulaire de connexion si l'utilisateur n'est pas connecté, sinon redirige vers la page de profil.
 */

export default () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const logged = useAppSelector((state) => state.user.logged)
	const dispatch = useAppDispatch()

	/** //* EN
Sends a POST request to the '/login' endpoint with the email and password entered by the user.
If the login is successful, sets the user as logged in and stores the received token in the state.
If the login is unsuccessful, sets the user as not logged in and clears the token, first name, and last name from the state.
@param {Event} e - The event object from the form submission.
*/
	/** //? FR
	 * Envoie une requête POST à l'endpoint '/login' avec l'email et le mot de passe entrés par l'utilisateur.
	 * Si la connexion est réussie, défini l'utilisateur comme connecté et stocke le jeton reçu dans l'état.
	 * Si la connexion échoue, défini l'utilisateur comme non connecté et efface le jeton, le prénom et le nom de famille de l'état.
	 * @param {Event} e - L'objet événement de la soumission du formulaire.
	 */

	const login = async (e: any) => {
		e.preventDefault()
		try {
			const { data } = await axios.post('/login', { email, password })
			dispatch(setUser({ logged: true, token: data.body.token }))
		} catch (error: any) {
			return dispatch(setUser({ logged: false, token: '', firstName: '', lastName: '' }))
		}
	}

	if (logged) {
		return <Navigate to='/profile'></Navigate>
	}

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Sign In</h1>
				<form>
					<div className='input-wrapper'>
						<label htmlFor='username'>Username</label>
						<input type='text' id='username' value={email} onChange={({ target: { value } }) => setEmail(value)} />
					</div>
					<div className='input-wrapper'>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' value={password} onChange={({ target: { value } }) => setPassword(value)} />
					</div>
					<div className='input-remember'>
						<input type='checkbox' id='remember-me' />
						<label htmlFor='remember-me'>Remember me</label>
					</div>
					<button className='sign-in-button' onClick={login}>
						Sign In
					</button>
				</form>
			</section>
		</main>
	)
}
