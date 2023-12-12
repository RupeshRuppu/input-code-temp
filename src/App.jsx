import React, { useEffect, useRef, useState } from "react";

const initialState = new Array(4).fill(0).map((_, index) => {
	return React.createRef(null);
});

function App() {
	/*
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);
   */

	/*
      useEffect(() => {
         ref1.current.focus();
      }, []);
   */

	const [state, setState] = useState(initialState);

	useEffect(() => {
		state[0].current.focus();
	}, []);

	return (
		<div className="App">
			{/* <input
				type="number"
				name="one"
				id="one"
				ref={ref1}
				onChange={e => {
					console.log(e.target.value);
					ref2.current.focus();
				}}
			/>
			<input
				type="number"
				name="two"
				id="two"
				ref={ref2}
				onChange={e => {
					console.log(e.target.value);
					ref3.current.focus();
				}}
			/>
			<input
				type="number"
				name="three"
				id="three"
				ref={ref3}
				onChange={e => {
					console.log(e.target.value);
					ref4.current.focus();
				}}
			/>
			<input
				type="number"
				name="four"
				id="four"
				ref={ref4}
				onChange={() => {
					ref4.current.blur();
				}}
			/> */}
			{state.map((ref, index) => {
				return (
					<input
						key={`input-${index + 1}`}
						type="number"
						name={`input-${index + 1}`}
						id={`input-${index + 1}`}
						ref={ref}
						onChange={() => {
							/*
                        index = 0
                        index + 1 => focus jaragali
                     */
							if (index < state.length - 1) state[index + 1].current.focus();

							if (index === state.length - 1) {
								state[index].current.blur();
							}
						}}
					/>
				);
			})}
		</div>
	);
}

export default App;

/*

   methods available on input
      focus()
      blur()
      onChange()


   Callback func: 
      onFocus() takes a callback func.

   CSS:
      user-select
      pointer-events: none;

*/
