import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Miami" />

				<footer>
					<p>
						<a
							href="https://github.com/elizabethJeudy/weather-app-react"
							target="_blank"
							rel="noreferrer"
						>
							Open-Sourced
						</a>{" "}
						{""}
						by: Elizabeth Jeudy
					</p>
				</footer>
			</div>
		</div>
	);
}
