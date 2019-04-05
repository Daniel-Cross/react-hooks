import React, { Component } from 'react';

class App extends Component {
	state = {
		count: 0,
		isOn: false,
	};

	componentDidMount() {
		document.title = `You have clicked ${this.state.count} times`;
	}

	componentDidUpdate() {
		document.title = `You have clicked ${this.state.count} times`;
	}

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
			</div>
		);
	}
}

export default App;
