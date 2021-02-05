import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

import Home from '../pages/Home'
import Profile from '../pages/Profile'

const { Navigator, Screen } = createBottomTabNavigator()

const AppRoutes: React.FC = () => {

	return (
		<Navigator
			tabBarOptions={{
				activeTintColor: '#32264D',
				inactiveTintColor: '#C1BCCC',
				showLabel: true,
				iconStyle: {
					marginBottom: -5
				},
				labelStyle: {
					fontFamily: 'Poppins-Regular',
					fontSize: 11,
				},
				style: {
					height: 60,
				}
			}}
		>
			<Screen 
				name="Home" 
				component={Home}
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => 
						<FeatherIcon name="home" color={color} size={30} />
				}}
			/>
			<Screen 
				name="UserGames" 
				component={Home} 
				options={{
					title: 'My Games',
					tabBarIcon: ({ color }) => 
						<IoniconIcon name="game-controller-outline" color={color} size={30} />
				}}
			/>
			<Screen 
				name="Profile" 
				component={Profile} 
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => 
						<FeatherIcon name="user" color={color} size={30} />
				}}
			/>
		</Navigator>
	)
}

export default AppRoutes