import React, { useRef, createContext, useEffect, useState } from 'react';
import { useTitleInput } from './Hooks/useTitleInput';
import Toggle from './Toggle';
// import Counter from './Counter';

export const UserContext = createContext();

const Input = () => {
	const [ name, setName ] = useTitleInput('');
	const ref = useRef();
	const [ dishes, setDishes ] = useState([]);

	const fetchDishes = async () => {
		console.log('ran');
		const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
		const data = await res.json();
		setDishes(data);
	};

	useEffect(() => {
		fetchDishes();
	}, []);

	const title = 'Welcome to a React Hooks experiment!';

	return (
		<UserContext.Provider value={{ user: true }}>
			<div className="wrapper" ref={ref}>
				<h1 onClick={() => ref.current.classList.add('new-class-name')}>{title}</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
					<button>Submit</button>
				</form>
				{dishes.map((dish) => (
					<article className="dish-card dish-card--withImage">
						<h3>{dish.name}</h3>
						<p>{dish.desc}</p>
						<div className="ingredients">
							{dish.ingredients.map((ingredient) => <span key={dish.ingredient}>{ingredient}</span>)}
						</div>
					</article>
				))}

				<Toggle />
				{/* <Counter /> */}
			</div>
		</UserContext.Provider>
	);
};

export default Input;
