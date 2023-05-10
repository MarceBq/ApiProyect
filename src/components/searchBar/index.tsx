import { useState, useEffect } from 'react'
import { State } from '../../interfaces'

interface Props {
	states: State[]
}

export default function SearchBar({ states }: Props) {
	const [search, setSearch] = useState('')
	const [result, setResult] = useState<State[]>()

	useEffect(() => {
		if (search == '') {
			setResult([])
			return
		}

		const filteredStates = states?.filter(
			(item) =>
				item.city.toLowerCase().includes(search) ||
				item.state.toLowerCase().includes(search)
		)

		setResult(filteredStates)
	}, [search, states])

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
