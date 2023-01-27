//* Import React-router-dom components
//? Importation des composants de React-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//* Import components
//? Importation des composants
import Header from './components/Header'
import Footer from './components/Footer'
//* Import pages
//? Importation des pages
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

//* App component
//? Composant App
function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	)
}

export default App
