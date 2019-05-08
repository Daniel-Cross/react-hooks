import React, { useRef, createContext } from 'react';
import { useTitleInput } from './Hooks/useTitleInput';
import Toggle from './Toggle';
import Counter from './Counter';

export const UserContext = createContext();

const Input = () => {
	const [ name, setName ] = useTitleInput('');
	const ref = useRef();
	return (
		<UserContext.Provider value={{ user: true }}>
			<div className="wrapper" ref={ref}>
				<h1 onClick={() => ref.current.classList.add('new-class-name')}>HOOK INPUT</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
					<button>Submit</button>
				</form>
				<Toggle />
				<Counter />
			</div>
		</UserContext.Provider>
	);
};

export default Input;
