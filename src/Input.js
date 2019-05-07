import React, { useRef } from 'react';
import { useTitleInput } from './Hooks/useTitleInput';

const Input = () => {
	const [ name, setName ] = useTitleInput('');
	const ref = useRef();
	return (
		<div className="wrapper" ref={ref}>
			<h1 onClick={() => ref.current.classList.add('new-class-name')}>HOOK INPUT</h1>
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
