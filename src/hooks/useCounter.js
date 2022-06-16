// Imports
import { useState, useEffect } from "react";

/* Custom hooks will create a different state for each
component where it'll be use, not the same state for all ! */

// Hooks
const useCounter = (forwards = true) => {

	// Counter
	const [counter, setCounter] = useState(0);

	// Auto-count
	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards){
				setCounter((oldState) => { return oldState + 1 });
			} else {
				setCounter((oldState) => { return oldState - 1 });
			}
		},1000);
		return () => {
			clearInterval(interval);
		}
	},[forwards]);

	// Return counter, then it'll be reachable
	// We can return everything we want, array, object ...
	return counter;

};

// Export
export default useCounter;