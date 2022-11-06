import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
	const [weather, setWeather] = useState({ loading: false });
	function handleResponse(response) {
		console.log(response.data);
		setWeather({
			loading: true,
			city: response.data.city,

			temp: response.data.temperature.current,
			description: response.data.condition.description,
			feels: response.data.temperature.feels_like,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icon/${response.data.condition.icon}.png`,
		});
	}

	if (weather.loading) {
		return (
			<div className="Weather">
				<form>
					<input
						type="search"
						placeholder="Type in a city.."
						className="search-form"
					/>
					<input type="submit" value="🔎" className="search-button" />
				</form>
				<h1>{weather.city}</h1>
				<div className="row">
					<div className="col-6">
						<h2 className="temperature">{Math.round(weather.temp)}ºF</h2>
						<h4>ºF | ºC</h4>
					</div>
				</div>
				<img
					src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
					alt="weather description icon"
				/>
				<div className="row">
					<div className="col-6">
						<h3>{weather.description}</h3>
						<ul>
							<li>Feels like: {Math.round(weather.feels)}ºF</li>
							<li>Humidity: {Math.round(weather.humidity)}%</li>
							<li>Wind: {Math.round(weather.wind)} m/ph</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-md-center">
					<div className="col-6 forecast">
						<ul>
							<li>Wednesday</li>
							<li>
								<img
									src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
									className="icon"
									alt="weather description icon
							"
								/>
							</li>
							<li>90ºF</li>
							<li>86º | 80º</li>
							<li>Mostly cloudy</li>
						</ul>
						<ul className="two">
							<li>Wednesday</li>
							<li>
								<img
									src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
									className="icon"
									alt="weather description icon
							"
								/>
							</li>
							<li>90ºF</li>
							<li>86º | 80º</li>
							<li>Mostly cloudy</li>
						</ul>
						<ul className="three">
							<li>Wednesday</li>
							<li>
								<img
									src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
									className="icon"
									alt="weather description icon
							"
								/>
							</li>
							<li>90ºF</li>
							<li>86º | 80º</li>
							<li>Mostly cloudy</li>
						</ul>
						<ul className="four">
							<li>Wednesday</li>
							<li>
								<img
									src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
									className="icon"
									alt="weather description icon
							"
								/>
							</li>
							<li>90ºF</li>
							<li>86º | 80º</li>
							<li>Mostly cloudy</li>
						</ul>
						<ul className="five">
							<li>Wednesday</li>
							<li>
								<img
									src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
									className="icon"
									alt="weather description icon
							"
								/>
							</li>
							<li>90ºF</li>
							<li>86º | 80º</li>
							<li>Mostly cloudy</li>
						</ul>
					</div>
				</div>

				<button type="button" className="btn">
					Current location
				</button>
				<p> Last updated: </p>
			</div>
		);
	} else {
		const apiKey = "5fbe11411b50f4b837t7a4072802b35o";
		const apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
		axios.get(apiURL).then(handleResponse);

		return "Loading...";
	}
}
