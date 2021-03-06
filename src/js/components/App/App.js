import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import requiredAuth from '../withAuth'
import LoginContainer from '../../containers/LoginContainer'
import DashboardContainer from '../../containers/DashboardContainer'
import NavBarContainer from '../../containers/NavBarContainer'
import MessageContainer from '../../containers/MessageContainer'
import ProgressBarContainer from '../../containers/ProgressBarContainer'
import LoginExpiredContainer from '../../containers/LoginExpiredContainer'

const sidebarWidth = 240

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffa800',
			contrastText: '#fff'
		},
		secondary: {
			main: '#004aea'
		}
	},
	typography: {
		useNextVariants: true
	}
})

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<ProgressBarContainer />
			<NavBarContainer sidebarWidth={sidebarWidth} />
			<MessageContainer />
			<Switch>
				<Route exact path="/" component={LoginContainer} />
				<Route exact path="/dashboard/new" component={requiredAuth(DashboardContainer)} />
				<Route exact path="/dashboard/:projectId" component={requiredAuth(DashboardContainer)} />
				<Route path="/dashboard" component={requiredAuth(DashboardContainer)} />
			</Switch>
			<LoginExpiredContainer />
		</MuiThemeProvider>
	)
}

export default App