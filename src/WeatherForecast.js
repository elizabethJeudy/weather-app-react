import React from "react";
import "./WeatherForecast.css";
import Weather from "./Weather";

export default function WeatherForecast(props) {
	return (
		<div className="WeatherForecast">
			<div className="row ">
				<div className="col-6">
					<div className="forecastDay">Wednesday</div>
					<Weather code="icon" />
					<div className="forecastTemperatures">
						<span className="forecastMax">85º | </span>
						<span className="forecastMin">80º</span>
					</div>
					<Weather description />
				</div>
			</div>
		</div>
	);
}
