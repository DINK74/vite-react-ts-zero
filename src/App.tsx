function App() {

	const features : string[] = ['Vite', 'React', 'TypeScript', 'Zero'];

	return (
		<ul>
			{
				features.map(f => <li>{f}</li>)
			}
		</ul>
	);
}

export default App;