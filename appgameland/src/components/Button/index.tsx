import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container } from './styles'

interface ButtonProps extends TouchableOpacityProps {
	isDisabled?: boolean
	containerStyle?: object
}

const Button: React.FC<ButtonProps> = ({ isDisabled = false, containerStyle = {}, children, ...rest }) => {

	return (
		<Container
			activeOpacity={0.6}
			disabled={isDisabled}
			isDisabled={isDisabled}
			style={containerStyle}
			{...rest}
		>
			{children}
		</Container>
	)
}

export default Button