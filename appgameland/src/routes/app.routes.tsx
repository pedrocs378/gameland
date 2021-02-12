import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Header from '../components/Header'

import HomeTabsRoutes from './homeTabs.routes'

import Search from '../pages/Search'
import GameInfo from '../pages/GameInfo'
import EditProfile from '../pages/EditProfile'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => {

	return (
		<Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Screen name="HomeTabs" component={HomeTabsRoutes} />
			
			<Screen 
				name="EditProfile" 
				component={EditProfile}
				options={{
					headerShown: true,
					header: () => <Header title="Edit your profile" />
				}}
			/>
			<Screen name="Search" component={Search} />
			<Screen name="GameInfo" component={GameInfo} />
		</Navigator>
	)
}

export default AppRoutes