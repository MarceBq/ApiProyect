import './App.css'
import { useState, useEffect } from 'react'

interface State {
	city: string
	growth_from_2000_to_2013: string
	latitude: number
	longitude: number
	population: number
	rank: number
	state: string
}

function App() {
	const [state, setState] = useState<State[]>()
	const [search, setSearch] = useState('')
	const [result, setResult] = useState<State[]>()

	useEffect(() => {
		const getStates = async () => {
			const response = await fetch(
				'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
			)

			const jsonStates = await response.json()

			setState(jsonStates)
		}

		getStates()
	}, [])

	useEffect(() => {
		if (search == '') {
			setResult([])
			return
		}

		const filteredStates = state?.filter(
			(item) =>
				item.city.toLowerCase().includes(search) ||
				item.state.toLowerCase().includes(search)
		)

		setResult(filteredStates)
	}, [search, state])

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearch(event.target.value)

	return (
		<>
			<input type="text" value={search} onChange={onChangeHandler} />
			<ul>
				{result?.map((item) => (
					<li key={item.rank}>
						{item.city}, {item.state}
					</li>
				))}
			</ul>
		</>
	)
}

export default App
