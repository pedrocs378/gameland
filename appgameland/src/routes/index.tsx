import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {

	return (
		<Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Screen name="App" component={AppRoutes} />
			<Screen name="Auth" component={AuthRoutes} />
		</Navigator>
	)
}

export default Routes