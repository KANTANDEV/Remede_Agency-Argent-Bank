//* Import React Router
import { Link } from 'react-router-dom'
//* Import Hooks
import { useAppSelector, useAppDispatch } from '../hooks'
//* Import Redux
import { setUser } from '../store/user'

/** //* EN
A functional component that handles the logout process of a user.
@returns {JSX.Element} A JSX element that renders the logout button if the user is logged in, otherwise it renders nothing.
*/
/** //? FR
 * Un composant fonctionnel qui gère le processus de déconnexion d'un utilisateur.
 * @returns {JSX.Element} Un élément JSX qui affiche le bouton de déconnexion si l'utilisateur est connecté, sinon il ne rend rien.
 */

export default () => {
	const logged = useAppSelector((state) => state.user.logged)
	const firstName = useAppSelector((state) => state.user.firstName)

	const dispatch = useAppDispatch()

	/** //* EN
	 *	A function that dispatches an action to the global state, which sets the user's logged status to false and clears their token, first name and last name.
	 */
	/** //? FR
	 * Une fonction qui envoie une action à l'état global, qui défini le statut de connexion de l'utilisateur à faux et efface son jeton, son prénom et son nom de famille.
	 */

	const logout = () => {
		dispatch(setUser({ logged: false, token: '', firstName: '', lastName: '' }))
	}

	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='/'>
				<img className='main-nav-logo-image' src='/img/argentBankLogo.png' alt='Argent Bank Logo' />
				<h1 className='sr-only'>Argent Bank</h1>
			</Link>
			<div>
				{logged ? (
					<>
						<Link className='main-nav-item' to='/profile'>
							<i className='fa fa-user-circle'></i>
							{firstName}
						</Link>
						<Link className='main-nav-item' to='/' onClick={logout}>
							<i className='fa-solid fa-right-from-bracket'></i>
							Sign Out
						</Link>
					</>
				) : (
					<Link className='main-nav-item' to='/login'>
						<i className='fa fa-user-circle'></i>
						Sign In
					</Link>
				)}
			</div>
		</nav>
	)
}
