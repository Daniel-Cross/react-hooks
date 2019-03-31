import React, { useState } from 'react';

const App = () => {
	const [ count, setCount ] = useState(0);

	const handleCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return (
		<div className="AppFunction">
			<button onClick={handleCount}>Click Me!</button>
			<div>I was clicked {count} times</div>
		</div>
	);
};

export default App;
