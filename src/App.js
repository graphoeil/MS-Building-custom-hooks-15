// Imports
import React from "react";
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";

// Component
const App = () => {

	// Return
	return(
		<React.Fragment>
			<ForwardCounter/>
			<BackwardCounter/>
		</React.Fragment>
	);

};

// Export
export default App;