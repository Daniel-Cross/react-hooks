import React, { useRef, createContext, useMemo } from 'react';
import { useTitleInput } from './Hooks/useTitleInput';
import Toggle from './Toggle';
import Counter from './Counter';

export const UserContext = createContext();

const Input = () => {
	const [ name, setName ] = useTitleInput('');
	const ref = useRef();

	const reverseWord = (word) => {
		return word.split('').reverse().join('');
	};

	const title = 'Welcome to a React Hooks experiment!';

	const titleReversed = useMemo(() => reverseWord(title), [ title ]);

	return (
		<UserContext.Provider value={{ user: true }}>
			<div className="wrapper" ref={ref}>
				<h1 onClick={() => ref.current.classList.add('new-class-name')}>{titleReversed}</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
					<button>Submit</button>
				</form>
				<Toggle />
				{/* <Counter /> */}
			</div>
		</UserContext.Provider>
	);
};

export default Input;
