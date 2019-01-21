import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DayViewProgress extends Component {
	constructor(props) {
		super(props);
		this.date = new Date();
		const current = (this.date.getHours() / 24) * 100;
		this.state = {
			max: (24 / 24) * 100,
			current
		};

		this.setTime = this.setTime.bind(this);
	}

	componentDidMount() {
		this.progress = setInterval(() => {
			this.setTime();
		}, 2000);
	}

	componentWillUnmount() {
		clearInterval(this.progress);
	}

	setTime() {
		const current = (this.date.getHours() / 24) * 100;
		this.setState({
			current
		});
	}

	render() {
		const { current } = this.state;
		const {
			children,
			style,
			progressColor = "red",
			borderColor = "#000"
		} = this.props;
		return (
			<View
				style={[
					{
						height: "100%",
						width: "100%",
						position: "relative",
						alignItems: "center",
						justifyContent: "center",
						borderColor,
						borderWidth: 2
					},
					style
				]}
			>
				{children ? children : <Text>{this.date}</Text>}
				<View
					style={{
						position: "absolute",
						top: 0,
						bottom: 0,
						zIndex: 9999,
						left: `${current}%`,
						width: 2,
						backgroundColor: progressColor
					}}
				/>
			</View>
		);
	}
}
