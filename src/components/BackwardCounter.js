// Imports
import React from "react";
import Card from "./Card";
import useCounter from "../hooks/useCounter";

// Component
const BackwardCounter = () => {

	// Counter
	const counter = useCounter(false);

	// Return
	return(
		<Card>{ counter }</Card>
	);

};

// Export
export default BackwardCounter;