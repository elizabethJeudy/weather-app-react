import React from "react";
import "./Weather.css";

export default function Weather() {
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
			<h1> Boynton Beach, FL</h1>
			<div className="row">
				<div className="col-6">
					<h2>75ºF</h2>
					<h4>ºF | ºC</h4>
				</div>
			</div>
			<img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
			<div className="row">
				<div className="col-6">
					<h3>Mostly Sunny</h3>
					<ul>
						<li>Feels like: 97ºF</li>
						<li>Humidity: 40%</li>
						<li>Wind: 5 m/ph</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
