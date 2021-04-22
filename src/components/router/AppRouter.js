import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Layout from "../layout/Layout";
import HomeContainer from "../../pages/home/HomeContainer";
import QuienSoyView from "../../pages/quien-soy/QuienSoyView";

const AppRouter = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/quien-soy" component={QuienSoyView} />
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

export default AppRouter;
