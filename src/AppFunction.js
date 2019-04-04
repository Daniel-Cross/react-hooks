import React, { useState } from 'react';

const App = () => {
	const [ count, setCount ] = useState(0);
	const [ isOn, setIsOn ] = useState(false);

	const handleCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const handleClick = () => {
		setIsOn((prevIsOn) => !prevIsOn);
	};

	return (
		<div className="AppFunction">
			<h2>Counter</h2>
			<button onClick={handleCount}>Click Me!</button>
			<div>I was clicked {count} times</div>

			<h2>Toggle Light</h2>
			<div
				style={{
					height: '50px',
					width: '50px',
					background: isOn ? 'yellow' : 'grey',
					borderRadius: '50%',
				}}
				onClick={handleClick}
			/>
		</div>
	);
};

export default App;
