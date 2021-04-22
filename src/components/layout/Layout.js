import React from "react";

import MenuContainer from "../menu/MenuContainer";

const Layout = ({ children }) => {
	return (
		<>
			<MenuContainer />
			{children}
		</>
	);
};

export default Layout;
