import React, { useState, useEffect } from 'react';

const App = () => {
	const [ count, setCount ] = useState(0);
	const [ isOn, setIsOn ] = useState(false);
	const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });

	useEffect(() => {
		document.title = `You have click ${count} times`;
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const handleMouseMove = (e) => {
		setMousePosition({
			x: e.pageX,
			y: e.pageY,
		});
	};

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
			<h2>Mouse Position</h2>
			{JSON.stringify(mousePosition, null, 2)}
			<br />
		</div>
	);
};

export default App;
