import React, { useState } from 'react';

const Input = () => {
	const [ name, setName ] = useState('');

	const formSubmit = (value, setValue) => {
		console.log('form submitted! ' + value);
		setValue('');
	};
	return (
		<div>
			<h1>HOOK INPUT</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					formSubmit(name, setName);
				}}>
				<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Input;
