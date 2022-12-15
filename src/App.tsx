function App() {
	const features: string[] = ["Vite", "React", "TypeScript", "Zero"];

	return (
		<ul>
			{features.map((f, idx) => (
				<li key={idx}>{f}</li>
			))}
		</ul>
	);
}

export default App;
