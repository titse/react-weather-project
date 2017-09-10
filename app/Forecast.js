/* Forecast.js 
Descritpion: text area where forecast is shown
modules: React, React native components
Author: Tiffany Tse
*/
"use strict";
//import modules
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//include componets
var Forecast = class extend React.Component{
	render () {
		return (
			<View>
				<Text style={styles.bigText}> 
					{this.props.main} 
				</Text>
				<Text style={styles.mainText}> Current conditions: 
					{this.props.description} 
				</Text>
				<Text style={styles.bigText}>
					{this.props.temp}°F
				</Text>				
			<View>
		);
	}
};
const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
  mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
});
Forecast.propsTypes = {
	//header
	main: React.PropTypes.string,
	//description
	description: React.PropTypes.string,
	//temp
	temp: React.PropTypes.string
}
//export Forecast component
export { Forecast };