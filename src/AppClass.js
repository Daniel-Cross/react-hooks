import React, { Component } from 'react';
import Input from './Input';

class App extends Component {
	state = {
		count: 0,
		isOn: false,
		x: null,
		y: null,
	};

	// componentDidMount() {
	// 	document.title = `You have clicked ${this.state.count} times`;
	// 	window.addEventListener('mousemove', this.handleMouseMove);
	// }

	// componentDidUpdate() {
	// 	document.title = `You have clicked ${this.state.count} times`;
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('mousemove', this.handleMouseMove);
	// }

	// handleMouseMove = (e) => {
	// 	this.setState({
	// 		x: e.pageX,
	// 		y: e.pageY,
	// 	});
	// };

	handleCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	handleToggle = () => {
		this.setState((prevState) => ({
			isOn: !prevState.isOn,
		}));
	};

	render() {
		return (
			<div className="App">
				<h2>Counter</h2>
				<button onClick={this.handleCount}>Click Me!</button>
				<p>I have been clicked {this.state.count} times!</p>

				<h2>Toggle Light</h2>
				<div
					onClick={this.handleToggle}
					style={{
						height: '50px',
						width: '50px',
						borderRadius: '50%',
						background: this.state.isOn ? 'yellow' : 'grey',
					}}
				/>
				<h2>Mouse Position</h2>
				<p>X Mouse position: {this.state.x}</p>
				<p>Y Mouse position: {this.state.y}</p>

				<Input />
			</div>
		);
	}
}

export default App;
