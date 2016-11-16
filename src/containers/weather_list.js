import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMapElement from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const lat = cityData.list.map(weather => weather.main.lat);
    const lon = cityData.list.map(weather => weather.main.lon);
    console.log(lat);

    return (
      <tr key={name}>
        <td><GoogleMapElement lat={lat} lon={lon}/></td>
        <td>
        	<Chart data={temps} color="green" units={"°K"} />
        </td>
        <td>
        	<Chart data={pressure} color="blue" units={"hPa"} />
        </td>
        <td>
        	<Chart data={humidity} color="red" units={"%"} />
        </td>
      </tr>
    );
  }

	render() {
		return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>City (U.S.A)</th>
					<th>Temperature (K)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
			</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
		</table>
		);
	}
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);