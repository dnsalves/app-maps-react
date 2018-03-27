import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

import Maps from '../maps/maps'

export default () => (
	<Router history={newHistory}>		
		<Route path="/" component={Maps} />
	</Router>
)
