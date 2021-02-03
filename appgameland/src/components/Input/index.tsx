import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Container, InputText, Icon } from './styles'

interface InputProps extends TextInputProps {
	name: string
	icon: string
	isPassword?: boolean
}

const Input: React.FC<InputProps> = ({ icon, isPassword=false, children, ...rest }) => {
	const [showPassword, setShowPassword] = useState(isPassword)
	
	return (
		<Container>
			<Icon name={icon} size={20} color="#9C98A6" />
			
			<InputText 
				placeholderTextColor="#9C98A6"
				secureTextEntry={showPassword}
				{...rest} 
			/>
			
			{ isPassword && (
				<TouchableOpacity activeOpacity={1} onPress={() => setShowPassword(!showPassword)} >
					{ showPassword ? (
						<Icon name="eye" size={20} color="#9C98A6" />
					) : (
						<Icon name="eye-off" size={20} color="#3c90ef" />
					) }
				</TouchableOpacity>
			)}
		</Container>
	)
}

export default Input