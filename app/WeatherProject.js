/* WeatherProject.js
Description: entry point for weather project
modules: React, React native components
Author: Tiffany Tse
*/
"use strict";
//import modules
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

//include components
import Forecast from "./Forecast.js";
import OpenWeatherMap from "./utils/openWeatherApi";

//create WeatherProject compoent
var WeatherProject = class extend React.Component{
	constructor(props) {
		//pass props to parent
		super(props);
		this.state = {}
		zip: '',
		forecast: {
			main: 'Clouds',
			description: 'few clouds',
			temp: '70.1'
		}
	}
	render () {
		return(
		<View style={style.container}>
			<Text style={style.weather}>
				<TextInput 
					style={style.input}
					onSubmitEditing={this.onZipCodeChange.bind(this)}
				/>
			</Text>
		</View>
		);
	}
	
	//zip code event handler
	onZipCodeChange (e) {
		this.setState({zip: e.nativeEvent.text});
	}
};
var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	input: {
		fontSize: 20,
		borderWidth: 2,
		height: 40
	}
});
//export Forecast component
export { WeatherProject };