//* Import React and React Router
//? Importation de React et de React Router
import { useEffect, useState, useRef } from 'react'
import { Navigate } from 'react-router-dom'
//* Import Axios
//? Importation d'Axios
import axios from 'axios'
//* Import Hooks
//? Importation des Hooks
import { useAppSelector, useAppDispatch } from '../hooks'
//* Import Redux
//? Importation de Redux
import { setUser, updateUser } from '../store/user'

/** //* EN
 * Profile component
 * @returns {JSX.Element} - Renders the profile page
 */
/** //? FR
 * Composant Profile
 * @returns {JSX.Element} - Rend la page de profil
 */

export default () => {
	/** //* EN
	 * State variable to determine if the user is currently editing their name
	 * @type {boolean}
	 */
	/** //? FR
	 * Variable d'état pour déterminer si l'utilisateur est en train de modifier son nom
	 * @type {boolean}
	 */
	const [editing, setEditing] = useState<boolean>(false)

	const logged = useAppSelector((state) => state.user.logged)
	const token = useAppSelector((state) => state.user.token)
	const firstName = useAppSelector((state) => state.user.firstName)
	const lastName = useAppSelector((state) => state.user.lastName)
	const dispatch = useAppDispatch()

	const firstNameInput = useRef(document.createElement('input'))
	const lastNameInput = useRef(document.createElement('input'))

	//* Update the user's name
	//? Met à jour le nom de l'utilisateur
	const changeName = () => {
		dispatch(updateUser({ token, firstName: firstNameInput.current.value, lastName: lastNameInput.current.value }))
		setEditing(false)
	}

	//* Get the user's name
	//? Récupère le nom de l'utilisateur
	useEffect(() => {
		//* Fetch the user's name
		//? Récupère le nom de l'utilisateur
		const getUserInfos = async () => {
			try {
				const { data } = await axios.post('/profile', undefined, { headers: { Authorization: 'Bearer ' + token } })
				dispatch(setUser({ firstName: data.body.firstName, lastName: data.body.lastName }))
			} catch (error: any) {
				return
			}
		}
		getUserInfos()
	}, [])

	//* If the user is not logged in, redirect to the login page
	//? Si l'utilisateur n'est pas connecté, redirige vers la page de connexion
	if (!logged) {
		return <Navigate to='/login'></Navigate>
	}

	return (
		<main className='main bg-dark'>
			<div className='header'>
				{!editing ? (
					<>
						<h1>
							Welcome back
							<br />
							{firstName + ' ' + lastName}!
						</h1>
						<button className='edit-button' onClick={() => setEditing(true)}>
							Edit Name
						</button>
					</>
				) : (
					<>
						<h1>Welcome back</h1>
						<br />
						<div className='flex-center'>
							<input ref={firstNameInput} placeholder={firstName} defaultValue={firstName} />
							<input ref={lastNameInput} placeholder={lastName} defaultValue={lastName} />
						</div>
						<div className='flex-center'>
							<button className='user-button' onClick={changeName}>
								Save
							</button>
							<button className='user-button' onClick={() => setEditing(false)}>
								Cancel
							</button>
						</div>
					</>
				)}
			</div>
			<h2 className='sr-only'>Accounts</h2>
			<section className='account'>
				<div className='account-content-wrapper'>
					<h3 className='account-title'>Argent Bank Checking (x8349)</h3>
					<p className='account-amount'>$2,082.79</p>
					<p className='account-amount-description'>Available Balance</p>
				</div>
				<div className='account-content-wrapper cta'>
					<button className='transaction-button'>View transactions</button>
				</div>
			</section>
			<section className='account'>
				<div className='account-content-wrapper'>
					<h3 className='account-title'>Argent Bank Savings (x6712)</h3>
					<p className='account-amount'>$10,928.42</p>
					<p className='account-amount-description'>Available Balance</p>
				</div>
				<div className='account-content-wrapper cta'>
					<button className='transaction-button'>View transactions</button>
				</div>
			</section>
			<section className='account'>
				<div className='account-content-wrapper'>
					<h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
					<p className='account-amount'>$184.30</p>
					<p className='account-amount-description'>Current Balance</p>
				</div>
				<div className='account-content-wrapper cta'>
					<button className='transaction-button'>View transactions</button>
				</div>
			</section>
		</main>
	)
}
