import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AuthRoutes from './auth.routes'

import AppRoutes from './app.routes'
import ProfileRoutes from './profile.routes'
import Search from '../pages/Search'
import GameInfo from '../pages/GameInfo'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {

	return (
		<Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Screen name="App" component={AppRoutes} />
			<Screen name="ProfileRoute" component={ProfileRoutes} />
			<Screen name="Search" component={Search} />
			<Screen name="GameInfo" component={GameInfo} />
			<Screen name="Auth" component={AuthRoutes} />
		</Navigator>
	)
}

export default Routes