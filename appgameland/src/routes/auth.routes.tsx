import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import SignUpComplete from '../pages/SignUpComplete'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => {

	return (
		<Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Screen name="SignIn" component={SignIn} />
			<Screen name="SignUp" component={SignUp} />
			<Screen name="SignUpComplete" component={SignUpComplete} />
		</Navigator>
	)
}

export default AuthRoutes