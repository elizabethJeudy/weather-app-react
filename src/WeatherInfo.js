import React from "react";
import "./FormatedDate";
import "./FormatedDate";
export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>
			<div className="row">
				<div className="col-6">
					<h2 className="temperature">{Math.round(props.data.temp)}ºF</h2>
					<h4>ºF | ºC</h4>
				</div>
			</div>
			<img
				src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
				alt="weather description icon"
			/>
			<div className="row">
				<div className="col-6">
					<h3>{props.data.description}</h3>
					<ul>
						<li>Feels like: {Math.round(props.data.feels)}ºF</li>
						<li>Humidity: {Math.round(props.data.humidity)}%</li>
						<li>Wind: {Math.round(props.data.wind)} m/ph</li>
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
			<p> Last updated:</p>
		</div>
	);
}
