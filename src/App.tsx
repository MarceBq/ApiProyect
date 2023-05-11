import { useState, useEffect } from 'react'

import SearchBar from 'components/searchBar'
import { State } from 'interfaces'
import { getStates } from 'services'

import './App.css'

function App() {
	const [states, setStates] = useState<State[]>([])

	useEffect(() => {
		const populateStates = async () => {
			const result = await getStates()

			setStates(result)
		}

		populateStates()
	}, [])

	return (
		<>
			<SearchBar states={states} />
		</>
	)
}

export default App
