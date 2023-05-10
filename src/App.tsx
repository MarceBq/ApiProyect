import './App.css'
import { useState, useEffect } from 'react'
import { State } from './interfaces'
import SearchBar from './components/searchBar'

function App() {
	const [states, setStates] = useState<State[]>([])

	useEffect(() => {
		const getStates = async () => {
			const response = await fetch(
				'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
			)

			const jsonStates = await response.json()

			setStates(jsonStates)
		}

		getStates()
	}, [])

	return (
		<>
			<SearchBar states={states} />
		</>
	)
}

export default App
