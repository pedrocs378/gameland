import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EditProfile from '../pages/EditProfile'
import Header from '../components/Header'

const { Navigator, Screen } = createStackNavigator()

const ProfileRoutes: React.FC = () => {

	return (
		<Navigator>
			<Screen 
				name="EditProfile" 
				component={EditProfile}
				options={{
					header: () => <Header title="Edit your profile" />
				}}
			/>
		</Navigator>
	)
}

export default ProfileRoutes