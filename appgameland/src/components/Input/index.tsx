import React, { useCallback, useState } from 'react'
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
	const [isFocused, setIsFocused] = useState(false)

	const handleBlur = useCallback(() => {
		setIsFocused(false)
	}, [])
	
	return (
		<Container isFocused={isFocused}>
			<Icon 
				name={icon} 
				size={20} 
				color={ isFocused ? "#3c90ef" : "#9C98A6" } 
			/>
			
			<InputText 
				placeholderTextColor="#9C98A6"
				secureTextEntry={showPassword}
				onFocus={() => setIsFocused(true)}
				onBlur={handleBlur}
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