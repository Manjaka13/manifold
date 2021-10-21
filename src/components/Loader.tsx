/*
    Loader for waiting process
*/

import React from "react";

const Loader: React.FC = (): JSX.Element => {
	return (
		<div className="loader">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
