import React, { useState, useContext } from 'react';
import { UserContext } from './Input';

const Toggle = () => {
	const [ isToggled, setToggle ] = useState(false);
	const userInfo = useContext(UserContext);
	console.log(userInfo);
	if (!userInfo.user) {
		return null;
	}

	return (
		<div className="Toggle">
			<button onClick={() => setToggle(!isToggled)} style={{ padding: '10px', borderRadius: '4px' }}>
				Toggle
			</button>
			{isToggled ? <h1>HELLO</h1> : null}
		</div>
	);
};

export default Toggle;
