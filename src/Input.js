import React from 'react';
import { useTitleInput } from './Hooks/useTitleInput';

const Input = () => {
	const [ name, setName ] = useTitleInput('');

	return (
		<div>
			<h1>HOOK INPUT</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Input;
