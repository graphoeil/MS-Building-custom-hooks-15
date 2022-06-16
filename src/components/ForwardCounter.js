// Imports
import React from "react";
import Card from "./Card";
import useCounter from "../hooks/useCounter";

// Component
const ForwardCounter = () => {

	// Counter
	const counter = useCounter();

	// Return
	return(
		<Card>{ counter }</Card>
	);

};

// Export
export default ForwardCounter;